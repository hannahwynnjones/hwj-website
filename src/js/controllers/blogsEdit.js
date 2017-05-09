angular
  .module('hwj')
  .controller( 'BlogsEditCtrl', BlogsEditCtrl);


BlogsEditCtrl.$inject = ['Blog', '$stateParams', '$state'];
function BlogsEditCtrl(Blog, $stateParams, $state) {
  const vm = this;

  vm.blog = Blog.get($stateParams);

  function blogsUpdate() {
    vm.blog.createdBy = vm.blog.createdBy.id;

    vm.blog
      .$update()
      .then(() => $state.go('blogsShow', $stateParams));
  }

  vm.update = blogsUpdate;
}
