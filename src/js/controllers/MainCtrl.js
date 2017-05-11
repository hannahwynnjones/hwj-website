angular
  .module('hwj')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth'];
function MainCtrl($rootScope, $state, $auth) {
  const vm = this;

  vm.isNavCollapsed = true;

  vm.isAuthenticated = $auth.isAuthenticated;

  // if($auth.getPayload()) vm.profilePageId = $auth.getPayload().userId;

  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    if(err.status === 401) $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.isNavCollapsed = true;
    if($auth.getPayload()) vm.profilePageId = $auth.getPayload().userId;

  });


  function logout() {
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;

}
