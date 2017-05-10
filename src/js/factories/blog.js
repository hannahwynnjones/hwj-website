angular
  .module('hwj')
  .factory('Blog', Blog);

Blog.$inject = ['$resource'];
function Blog($resource){
  return new $resource('/api/blogs/:id', { id: '@id'},
    { update: { method: 'PUT'}
    });
}
