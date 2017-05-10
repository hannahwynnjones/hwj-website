angular
  .module('hwj')
  .controller( 'ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsShowCtrl.$inject = ['Project', 'User', '$stateParams', '$state', '$auth'];
function ProjectsShowCtrl(Project, User, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.project = Project.get($stateParams);
  vm.users = User.query();

  console.log(User.get({ id: $auth.getPayload().id }), 'vm.currentUser.id');

  console.log(vm.project);

//===================DELETE Project==============

  function projectsDelete() {
    vm.project
      .$remove()
      .then(() => $state.go('projectsIndex'));
  }

  vm.delete = projectsDelete;

  // function projectsUpdate() {
  //   Project
  //     .update({id: vm.project.id, project: vm.project });
  // }
}
