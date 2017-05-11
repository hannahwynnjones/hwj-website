angular
  .module('hwj')
  .controller( 'BlogsIndexCtrl', BlogsIndexCtrl);

BlogsIndexCtrl.$inject = ['Blog'];
function BlogsIndexCtrl(Blog) {
  const vm = this;
  vm.all = Blog.query();

}
