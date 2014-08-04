angular.module('ngTableView')
  .controller('TableViewController', ['$routeParams',
    function($routeParams){
      this.messageData = {
        'Modules': {
          'Error-Messages': ['qwerThis is a message', 'So issdfs this', 'Dont forget asdfsbout me too'],
          'Warning-Messages': ['This is sdfa message', 'So iqws this', 'Dontasdf forget about me too'],
          'Suggestion-Messages': ['This meerqessage', 'So is thsdgsis', 'Dont foasdfrget asdfabout me too'],
        },
        'Directives': {
          'Error-Messages': ['rtyThis is asdfnot message', 'So ishggh this, not', 'Dont forgedfh abohkhut me too, jk'],
          'Warning-Messages': ['This not mqweressage', 'So is this, not', 'Dont forget abfghfout me too, jk'],
          'Suggestion-Messages': ['This is not masdessage', 'So is thiddfss, not', 'Dont forget abohmgut me too, jk'],
        },
      };

      this.labels = ['All-Messages', 'Error-Messages', 'Warning-Messages', 'Suggestion-Messages'];
      this.module = $routeParams.module || 'Directives';
      this.type = $routeParams.type || 'All-Messages';

      (function(self){
        var all = {
          'All-Messages': [],
          'Error-Messages': [],
          'Warning-Messages': [],
          'Suggestion-Messages': []
        };
        for(var id in self.messageData) {
          self.messageData[id]['All-Messages'] = [];
          for(var type in self.messageData[id]) {
            self.messageData[id][type].forEach(function(message) {
              if(type !== 'All-Messages'){
                all['All-Messages'].push({message: message, type: type, module: id});
                all[type].push(message);
                self.messageData[id]['All-Messages'].push({message: message, type: type});
              }
            });
          }
        }
        self.messageData['All'] = all;
      })(this);


      this.dashesToSpace = function(str) {
        return str.replace(/-/g,' ');
      }

  }]);