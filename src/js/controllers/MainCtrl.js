angular
  .module('hwj')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth'];
function MainCtrl($rootScope, $state, $auth) {
  const vm = this;

  vm.isAuthenticated = $auth.isAuthenticated;
  if($auth.getPayload()) vm.profilePageId = $auth.getPayload().userId;
  console.log('hell', vm.profilePageId.user);

  console.log('workigggg', vm.isAuthenticated);

  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    if(err.status === 401) $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    if($auth.getPayload()) vm.currentUser = $auth.getPayload();

    if($auth.getPayload()) vm.profilePageId = $auth.getPayload().userId;
  });
  //
  // const protectedStates = ['blogsNew', 'blogsEdit'];
  //
  // $rootScope.$on('$stateChangeStart', (e, toState) => {
  //   if((!$auth.isAuthenticated() && protectedStates.includes(toState.name))) {
  //     e.preventDefault();
  //     $state.go('login');
  //     vm.message = 'You must be logged in to access this page.';
  //   }
  //   vm.pageName = toState.name;
  //
  // });

  function logout() {
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;

}
