angular
  .module('hwj')
  .factory('Comments', Comments);

Comments.$inject = ['$resource'];
function Comments($resource){
  return new $resource('/api/blogs/:blogId/comments/:id', { id: '@id'},
    { update: { method: 'PUT'}
    });
}
