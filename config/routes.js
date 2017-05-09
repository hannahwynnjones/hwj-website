const router = require('express').Router();
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const imageUpload = require('../lib/imageUpload');
const userController = require('../controllers/user');
const blogController = require('../controllers/blog');
const projectController = require('../controllers/project');
//secure route is not used yet, but can be added to functions so that it is checking whether the user is logged in or not eg editing or deleting files

router.get('/', (req, res) => res.render('statics/index'));


//================BLOGS===============================

router.route('/blog')
  .get(blogController.index)
  .post(secureRoute, imageUpload, blogController.create);

router.route('/blog/:id')
  .get(blogController.show)
  .put(imageUpload, blogController.update)
  .delete(secureRoute,blogController.delete);

router.route('/blog/:id/comments')
  .post(secureRoute, blogController.createComment);

router.route('/blog/:id/comments/:commentId')
  .delete(secureRoute,blogController.deleteComment);

  //================PROJECTS===============================

router.route('/project')
  .get(projectController.index)
  .post(secureRoute, imageUpload, projectController.create);

router.route('/project/:id')
  .get(projectController.show)
  .put(imageUpload, projectController.update)
  .delete(secureRoute,projectController.delete);

router.route('/project/:id/comments')
  .post(secureRoute, projectController.createComment);

router.route('/project/:id/comments/:commentId')
  .delete(secureRoute,projectController.deleteComment);

//=======================PROFILES - USERS=========================

router.route('/profile')
  .get(secureRoute, userController.profile);

router.route('/users')
  .get(userController.index); //landing page

router.route('/users/:id')
  .get(userController.show)
  .put(imageUpload, userController.update)
  .delete(secureRoute,userController.delete);

//=====================AUTH================================

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

//=========================================================

router.all('*'), (req, res) => res.notFound();

module.exports = router;

//capital letters are classes (but in the case its a function)
