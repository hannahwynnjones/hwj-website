angular
  .module('hwj')
  .controller('ProjectsEditCtrl', ProjectsEditCtrl);


ProjectsEditCtrl.$inject = ['Project', '$stateParams', '$state'];
function ProjectsEditCtrl(Project, $stateParams, $state) {
  const vm = this;

  vm.project = Project.get($stateParams);

  function projectsUpdate() {
    vm.project
      .$update()
      .then(() => $state.go('projectsShow', $stateParams));
  }

  vm.update = projectsUpdate;
}
