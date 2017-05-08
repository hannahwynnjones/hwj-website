const router = require('express').Router();
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const imageUpload = require('../lib/imageUpload');
const userController = require('../controllers/user');
const itemController = require('../controllers/item');
//secure route is not used yet, but can be added to functions so that it is checking whether the user is logged in or not eg editing or deleting files

router.get('/', (req, res) => res.render('statics/index'));

router.route('/users')
  .get(userController.index); //landing page

router.route('/users/:id')
  .get(userController.show)
  .put(imageUpload, userController.update)
  .delete(secureRoute,userController.delete);

router.route('/item')
  .get(itemController.index)
  .post(secureRoute, imageUpload, itemController.create);

router.route('/item/:id')
  .get(itemController.show)
  .put(imageUpload, itemController.update)
  // .post(requestController.create)
  .delete(secureRoute,itemController.delete);

router.route('/item/:id/comments')
  .post(secureRoute, itemController.createComment);

router.route('/item/:id/comments/:commentId')
  .delete(secureRoute,itemController.deleteComment);

router.route('/profile')
  .get(secureRoute, userController.profile);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);


router.all('*'), (req, res) => res.notFound();

module.exports = router;

//capital letters are classes (but in the case its a function)
