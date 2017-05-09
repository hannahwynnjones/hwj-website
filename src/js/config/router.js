angular
  .module('hwj')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

//state for messages

  $stateProvider
   .state('home', {
     url: '/',
     templateUrl: 'js/views/static/home.html'
    //  controller: 'home as home'
   })
   .state('blogsIndex', {
     url: '/blogsindex',
     templateUrl: 'js/views/blogs/index.html',
     controller: 'BlogsIndexCtrl as blogsIndex'
   })
   .state('blogsNew', {
     url: '/blogsnew',
     templateUrl: 'js/views/blogs/new.html',
     controller: 'BlogsNewCtrl as blogsNew'
   })
   .state('blogsShow', {
     url: '/blogshow/:id',
     templateUrl: 'js/views/blogs/show.html',
     controller: 'BlogsShowCtrl as blogsShow'
   })
   .state('blogEdit', {
     url: '/blogshow/:id/edit',
     templateUrl: 'js/views/blogs/edit.html',
     controller: 'BlogsEditCtrl as blogsEdit'
   })
  //  .state('projectsIndex', {
  //    url: '/projectsindex',
  //    templateUrl: 'js/views/projects/index.html',
  //    controller: 'ProjectsIndexCtrl as projectsIndex'
  //  })
  //  .state('projectsNew', {
  //    url: '/projectsnew',
  //    templateUrl: 'js/views/projects/new.html',
  //    controller: 'ProjectsNewCtrl as projectsNew'
  //  })
  //  .state('projectsShow', {
  //    url: '/projectshow/:id',
  //    templateUrl: 'js/views/projects/show.html',
  //    controller: 'ProjectsShowCtrl as projectsShow'
  //  })
  //  .state('projectEdit', {
  //    url: '/projectshow/:id/edit',
  //    templateUrl: 'js/views/projects/edit.html',
  //    controller: 'ProjectsEditCtrl as projectsEdit'
  //  })
   .state('login', {
     url: '/login',
     templateUrl: 'js/views/auth/login.html',
     controller: 'LoginCtrl as login'
   })
   .state('register', {
     url: '/register',
     templateUrl: 'js/views/auth/register.html',
     controller: 'RegisterCtrl as register'
   });
  //  .state('profile', {
  //    url: '/user/:id',
  //    templateUrl: 'js/views/users/show.html',
  //    controller: 'ProfileCtrl as profile'
  //  })
  //  .state('editProfile', {
  //    url: '/user/:id/edit',
  //    templateUrl: 'js/views/users/edit.html',
  //    controller: 'EditCtrl as editProfile'
  //  });


  $urlRouterProvider.otherwise('/');

}
