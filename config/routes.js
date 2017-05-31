const router = require('express').Router();
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
// const admin = require('../lib/admin');
const imageUpload = require('../lib/imageUpload');
// const userController = require('../controllers/user');
const blogController = require('../controllers/blog');
const projectController = require('../controllers/project');
//secure route is not used yet, but can be added to functions so that it is checking whether the user is logged in or not eg editing or deleting files

router.get('/', (req, res) => res.render('statics/index'));


//================BLOGS===============================

router.route('/blogs')
  .get(blogController.index)
  .post(secureRoute, imageUpload, blogController.create);

router.route('/blogs/:id')
  .get(blogController.show)
  .put(imageUpload, blogController.update)
  .delete(secureRoute,blogController.delete);

router.route('/blogs/:id/comments')
  .post(secureRoute, blogController.createComment);

router.route('/blogs/:id/comments/:commentId')
  .delete(secureRoute,blogController.deleteComment);

  //================PROJECTS===============================

router.route('/projects')
  .get(projectController.index)
  .post(secureRoute, imageUpload, projectController.create);

router.route('/projects/:id')
  .get(projectController.show)
  .put(imageUpload, projectController.update)
  .delete(projectController.delete);
//
// //=======================PROFILES - USERS=========================
//
// router.route('/profile')
//   .get(secureRoute, userController.profile);
//
// router.route('/users')
//   .get(userController.index); //landing page
//
// router.route('/users/:id')
//   .get(userController.show)
//   .put(imageUpload, userController.update)
//   .delete(secureRoute,userController.delete);

//=====================AUTH================================

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

//=========================================================

router.all('*'), (req, res) => res.notFound();

module.exports = router;

//capital letters are classes (but in the case its a function)
