angular
  .module('hwj')
  .controller( 'BlogsIndexCtrl', BlogsIndexCtrl);

BlogsIndexCtrl.$inject = ['Blog', 'User', '$state', '$auth'];
function BlogsIndexCtrl(Blog, User, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });
  console.log(vm.currentUser);
  vm.isAuthenticated = $auth.isAuthenticated;
  const currentUser = vm.currentUser;
  vm.user = User.query();
  vm.all = Blog.query();
}
