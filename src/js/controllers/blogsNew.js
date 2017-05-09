angular
  .module('hwj')
  .controller( 'BlogsNewCtrl', BlogsNewCtrl);

BlogsNewCtrl.$inject = ['Blog', 'User', '$state'];
function BlogsNewCtrl(Blog, User, $state){
  const vm = this;
  vm.blog = {};
  vm.users = User.query();

  function blogsCreate() {
    if(vm.blogForm.$valid) {
      Blog
        .save(vm.blog)
        .$promise
        .then(() => $state.go('blogsIndex'));
    }

  }

  vm.create = blogsCreate;
}
