angular
  .module('hwj')
  .config(Interceptors);

Interceptors.$inject = ['$httpProvider'];
function Interceptors($httpProvider) {
  $httpProvider.interceptors.push('ErrorHandler');
}
