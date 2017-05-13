angular
  .module('hwj')
  .controller( 'ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsShowCtrl.$inject = ['Project', '$sce', '$stateParams', '$state', '$auth'];
function ProjectsShowCtrl(Project, $sce, $stateParams, $state, $auth) {
  const vm = this;
  // if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.project = Project.get($stateParams);
  // 
  // vm.projectsShow.project.description.htmlSafe =
  //    $sce.trustAsHtml(Project.description.html);

//===================DELETE Project==============

  function projectsDelete() {
    vm.project
      .$remove()
      .then(() => $state.go('projectsIndex'));
  }

  vm.delete = projectsDelete;

//==============CLOSE MODAL=================
  //
  // function closeModal() {
  //   $uibModalInstance.close();
  // }
  //
  // vm.close = closeModal;
}
