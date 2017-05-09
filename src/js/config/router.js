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
   })
   .state('blogsIndex', {
     url: '/blogs',
     templateUrl: 'js/views/blogs/index.html',
     controller: 'BlogsIndexCtrl as blogsIndex'
   })
   .state('blogsNew', {
     url: '/blogs/new',
     templateUrl: 'js/views/blogs/new.html',
     controller: 'BlogsNewCtrl as blogsNew'
   })
   .state('blogsShow', {
     url: '/blogs/:id',
     templateUrl: 'js/views/blogs/show.html',
     controller: 'BlogsShowCtrl as blogsShow'
   })
   .state('blogsEdit', {
     url: '/blogs/:id/edit',
     templateUrl: 'js/views/blogs/edit.html',
     controller: 'BlogsEditCtrl as blogsEdit'
   })
   .state('projectsIndex', {
     url: '/projects',
     templateUrl: 'js/views/projects/index.html',
     controller: 'ProjectsIndexCtrl as projectsIndex'
   })
   .state('projectsNew', {
     url: '/projects/new',
     templateUrl: 'js/views/projects/new.html',
     controller: 'ProjectsNewCtrl as projectsNew'
   })
   .state('projectsShow', {
     url: '/projects/:id',
     templateUrl: 'js/views/projects/show.html',
     controller: 'ProjectsShowCtrl as projectsShow'
   })
   .state('projectsEdit', {
     url: '/projects/:id/edit',
     templateUrl: 'js/views/projects/edit.html',
     controller: 'ProjectsEditCtrl as projectsEdit'
   })
   .state('login', {
     url: '/login',
     templateUrl: 'js/views/auth/login.html',
     controller: 'AuthCtrl as auth'
   })
   .state('register', {
     url: '/register',
     templateUrl: 'js/views/auth/register.html',
     controller: 'AuthCtrl as auth'
   });
  //  .state('profilesIndex', {
  //    url: '/users',
  //    templateUrl: 'js/views/users/index.html',
  //    controller: 'ProfilesIndexCtrl as profilesIndex'
  //  })
  //  .state('profilesShow', {
  //    url: '/user/:id',
  //    templateUrl: 'js/views/users/show.html',
  //    controller: 'ProfilesShowCtrl as profilesShow'
  //  })
  //  .state('profilesEdit', {
  //    url: '/user/:id/edit',
  //    templateUrl: 'js/views/users/edit.html',
  //    controller: 'ProfilesEditCtrl as profilesEdit'
  //  });


  $urlRouterProvider.otherwise('/');

}
