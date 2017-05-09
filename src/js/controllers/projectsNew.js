angular
  .module('hwj')
  .controller( 'ProjectsNewCtrl', ProjectsNewCtrl);

ProjectsNewCtrl.$inject = ['Project', 'User', '$state'];
function ProjectsNewCtrl(Project, User, $state){
  const vm = this;
  vm.project = {};
  vm.users = User.query();

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
