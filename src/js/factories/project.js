angular
  .module('hwj')
  .factory('Project', Project);

Project.$inject = ['$resource'];
function Project($resource){
  const Project = new $resource('/api/project/:id', { id: '@id'},
    { update: { method: 'PUT'}
    });

  Project.prototype.location = function(){
    if(this.location){
      return this.location;
    }
  };
  return Project;
}
