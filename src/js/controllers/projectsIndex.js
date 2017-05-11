angular
  .module('hwj')
  .controller( 'ProjectsIndexCtrl', ProjectsIndexCtrl);

ProjectsIndexCtrl.$inject = ['Project', '$state', '$uibModal', '$stateParams'];
function ProjectsIndexCtrl(Project, $state, $uibModal, $stateParams) {
  const vm = this;
  // if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });
  vm.all = Project.query();

  vm.myInterval = 5000; // The time delay between each slide
  vm.noWrapSlides = false; // This will decide whether or not the carousel is 'infinite' or not, i.e whether you can keep going round in a loop with the arrow buttons
  vm.active = 0; // This decides which slide is shown first (based on it's index in the array of slides)

  function openModal() {
    $uibModal.open({
      templateUrl: 'js/views/partials/projectShowModal.html',
      controller: 'ProjectsShowCtrl as ProjectsShow',
      resolve: {
        currentProject: ($stateParams) => {
          return vm.project;
        }
      }
    });
  }

  vm.open = openModal;
}
