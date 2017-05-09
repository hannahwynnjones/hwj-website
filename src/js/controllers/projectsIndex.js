angular
  .module('hwj')
  .controller( 'ProjectsIndexCtrl', ProjectsIndexCtrl);

ProjectsIndexCtrl.$inject = ['Project', 'User', '$state', '$auth'];
function ProjectsIndexCtrl(Project, User, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });
  console.log(vm.currentUser);
  vm.isAuthenticated = $auth.isAuthenticated;
  // const currentUser = vm.currentUser;
  vm.user = User.query();
  vm.all = Project.query();
}
