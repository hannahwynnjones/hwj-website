angular
  .module('hwj')
  .factory('Blog', Blog);

Blog.$inject = ['$resource'];
function Blog($resource){
  const Blog = new $resource('/api/blog/:id', { id: '@id'},
    { update: { method: 'PUT'}
    });

  Blog.prototype.location = function(){
    if(this.location){
      return this.location;
    }
  };
  return Blog;
}
