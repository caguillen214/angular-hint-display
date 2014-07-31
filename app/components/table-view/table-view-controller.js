angular.module('ngTableView')
  .controller('TableViewController', ['$routeParams',
    function($routeParams){
      this.messageData = {
        'Modules': ['This is a message', 'So is this', 'Dont forget about me too'],
        'Directives': ['This is not message', 'So is this, not', 'Dont forget about me too, jk'],
      };
      this.labels = ['All-Messages', 'Errors', 'Warnings', 'Best-Practice'];
      this.module = $routeParams.module || 'Directives';
      this.type = $routeParams.type || 'All-Messages';

      this.dashesToSpace = function(str) {
        return str.replace(/-/g,' ');
      }
  }]);