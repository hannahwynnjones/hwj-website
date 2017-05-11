angular
  .module('hwj')
  .controller( 'ProjectsNewCtrl', ProjectsNewCtrl);

ProjectsNewCtrl.$inject = ['Project', '$state'];
function ProjectsNewCtrl(Project, $state){
  const vm = this;
  vm.project = {};

  function projectsCreate() {
    if(vm.projectForm.$valid) {
      Project
        .save(vm.project)
        .$promise
        .then(() => $state.go('projectsIndex'));
    }
  }

  vm.create = projectsCreate;
}
