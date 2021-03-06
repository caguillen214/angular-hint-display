angular.module('ngHintDisplay', ['ngRoute','ngTableView']).
      config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:module?/:type?', {
          controller: 'TableViewController',
          controllerAs: 'tvCtrl',
          templateUrl: 'components/table-view/table-view.html'
        }).
        otherwise({redirectTo: '/'});
  }]);
