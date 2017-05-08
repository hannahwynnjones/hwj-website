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
     templateUrl: 'js/views/home.html'
    //  controller: 'home as home'
   })
  //  .state('itemsNew', {
  //    url: '/new',
  //    templateUrl: 'js/views/items/new.html',
  //    controller: 'itemsNewCtrl as itemsNew'
  //  })
  //  .state('itemsShow', {
  //    url: '/show/:id',
  //    templateUrl: 'js/views/items/show.html',
  //    controller: 'itemShowCtrl as show'
  //  })
  //  .state('itemEdit', {
  //    url: '/show/:id/edit',
  //    templateUrl: 'js/views/items/edit.html',
  //    controller: 'itemEditCtrl as edit'
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
