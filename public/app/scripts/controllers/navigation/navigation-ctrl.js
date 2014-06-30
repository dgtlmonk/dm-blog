define(['scripts/controllers/module-base'], function(module) {
  'use strict';
  console.log('navigation controller :: init');
  return module.controller('NavigationCtrl', [
    '$scope', '$location', function($scope, $location) {
      $scope.isSelected = function(section) {
        return $scope.selected === section;
      };
      $scope.setSelection = function(section) {
        console.log('selection set to ' + section);
        $scope.selected = section;
      };
      $scope.navClass = function(page) {
        var currentRoute;
        console.log($location.path().substring(1));
        currentRoute = $location.path().substring(1) || '';
        alert('yo');
        if (page === currentRoute) {
          return 'active-nav';
        } else {
          return '';
        }
      };
    }
  ]);
});
