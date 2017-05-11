angular
  .module('hwj')
  .controller( 'BlogsIndexCtrl', BlogsIndexCtrl);

BlogsIndexCtrl.$inject = ['Blog', 'User', '$state', '$auth'];
function BlogsIndexCtrl(Blog, User, $state, $auth) {
  const vm = this;
  vm.user = User.query();
  vm.all = Blog.query();

  if ($auth.getPayload()) vm.currentUser = User.query({ id: $auth.getPayload().id });
  console.log('workigggg', vm.currentUser);

  vm.isAuthenticated = $auth.isAuthenticated;
  const currentUser = vm.currentUser;
  console.log(vm.user, 'currentUser');
  console.log($auth.getPayload().id, 'currentUser');
}
