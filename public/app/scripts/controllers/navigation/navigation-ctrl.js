define(['scripts/controllers/module-base'], function(module) {
  'use strict';
  console.log('navigation controller :: init');
  return module.controller('NavigationCtrl', [
    '$scope', '$location', function($scope, $location) {
      $scope.navClass = function(page) {
        var currentRoute;
        console.log($location.path().substring(1));
        currentRoute = $location.path().substring(1) || '';
        if (page === currentRoute) {
          return 'active-nav';
        } else {
          return '';
        }
      };
    }
  ]);
});
