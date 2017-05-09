angular
  .module('hwj')
  .controller( 'BlogsShowCtrl', BlogsShowCtrl);

BlogsShowCtrl.$inject = ['Blog', 'User', 'Comment', '$stateParams', '$state', '$auth'];
function BlogsShowCtrl(Blog, User, Comment, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.blog = Blog.get($stateParams);

  console.log(vm.blog);
//===================DELETE Blog==============

  function blogsDelete() {
    vm.blog
      .$remove()
      .then(() => $state.go('blogsIndex'));
  }

  vm.delete = blogsDelete;

  // function blogsUpdate() {
  //   Blog
  //     .update({id: vm.blog.id, blog: vm.blog });
  // }

//===============COMMENTS======================

  function addComment() {
    vm.comment.blog_id = vm.blog.id;

    Comment
      .save({ comment: vm.comment })
      .$promise
      .then((comment) => {
        vm.blog.comments.push(comment);
        vm.comment = {};
      });
  }

  vm.addComment = addComment;

  function deleteComment(comment) {
    Comment
      .delete({ id: comment.id })
      .$promise
      .then(() => {
        const index = vm.blog.comments.indexOf(comment);
        vm.blog.comments.splice(index, 1);
      });
  }

  vm.deleteComment = deleteComment;
}
