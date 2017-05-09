angular
  .module('hwj')
  .controller( 'ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsShowCtrl.$inject = ['Project', 'User', 'Comment', '$stateParams', '$state', '$auth'];
function ProjectsShowCtrl(Project, User, Comment, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.project = Project.get($stateParams);

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

//===============COMMENTS======================

  function addComment() {
    vm.comment.project_id = vm.project.id;

    Comment
      .save({ comment: vm.comment })
      .$promise
      .then((comment) => {
        vm.project.comments.push(comment);
        vm.comment = {};
      });
  }

  vm.addComment = addComment;

  function deleteComment(comment) {
    Comment
      .delete({ id: comment.id })
      .$promise
      .then(() => {
        const index = vm.project.comments.indexOf(comment);
        vm.project.comments.splice(index, 1);
      });
  }

  vm.deleteComment = deleteComment;
}
