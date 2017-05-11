angular
  .module('hwj')
  .controller( 'BlogsShowCtrl', BlogsShowCtrl);

BlogsShowCtrl.$inject = ['Blog', 'Comments', '$stateParams', '$state'];
function BlogsShowCtrl(Blog, Comments, $stateParams, $state) {
  const vm = this;
  // if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });
  vm.newComment = {};
  vm.blog = Blog.get($stateParams);

//===================DELETE Blog==============

  function blogsDelete() {
    vm.blog
      .$remove()
      .then(() => $state.go('blogsIndex'));
  }

  vm.delete = blogsDelete;

//===============COMMENTS======================

  function addComment(){
    console.log(vm.newComment, 'new comment');
    Comments
    .save( { blogId: vm.blog.id }, vm.newComment)
    .$promise
    .then((comment)=>{
      vm.blog.comments.push(comment);
      vm.newComment = {};
      console.log(vm.newComment, 'new comment2');

    });
  }

  vm.addComment = addComment;

  function deleteComment(comment){
    Comments
    .delete({ blogId: vm.blog.id, id: comment.id })
    .$promise
    .then(()=>{
      const index = vm.blog.comments.indexOf(comment);
      vm.blog.comments.splice(index, 1);
    });
  }

  vm.deleteComment = deleteComment;
}
