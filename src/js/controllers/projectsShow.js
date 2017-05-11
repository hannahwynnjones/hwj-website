angular
  .module('hwj')
  .controller( 'ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsShowCtrl.$inject = ['Project', 'User', '$stateParams', '$state', '$auth', '$uibModalInstance'];
function ProjectsShowCtrl(Project, User, $stateParams, $state, $auth, $uibModalInstance) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.query({ id: $auth.getPayload().id });

  vm.project = Project.query($stateParams);
  vm.users = User.query();

  console.log(User.query({ id: $auth.getPayload().id }), 'vm.currentUser.id');

  console.log(vm.project, 'vm.project');

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
//==============CLOSE MODAL=================

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;
}
