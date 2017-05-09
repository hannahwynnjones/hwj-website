const Project = require('../models/project');

function indexRoute(req, res, next) {
  Project
    .find()
    .populate('createdBy')
    .then((projects) => res.json(projects))
    .catch(next);
}

function createRoute(req, res, next) {
  if(req.file) req.body.image = req.file.filename;
  req.body.createdBy = req.user;
  Project
    .create(req.body)
    .then((project) => res.status(201).json(project))
    .catch(next);
}

function showRoute(req, res, next) {
  Project
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .then((project) => {
      if(!project) return res.notFound();
      res.json(project);
    })
    .catch(next);
}

function updateRoute(req, res, next) {

  if(req.file) req.body.image = req.file.filename;
  Project
    .findById(req.params.id)
    .exec()
    .then((project) => {
      if(!project) return res.notFound();

      for(const field in req.body) {
        project[field] = req.body[field];
      }

      return project.save();
    })
    .then((project) => res.json(project))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Project
    .findById(req.params.id)
    .exec()
    .then((project) => {
      if(!project) return res.notFound();
      return project.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Project
    .findById(req.params.id)
    .exec()
    .then((project) => {
      if(!project) return res.notFound();

      const comment = project.comments.create(req.body);
      project.comments.push(comment); // create an embedded record
      return project.save()
      .then(()=> res.json(comment));
    })
    .then((project) => res.redirect(`/projects/${project.id}`))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {

  Project
    .findById(req.params.id)
    .exec()
    .then((project) => {
      if(!project) return res.notFound();
      // get the embedded record by it's id
      const comment = project.comments.id(req.params.commentId);
      comment.remove();

      return project.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}



module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
