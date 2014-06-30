define(['scripts/controllers/module-base'], function(module) {
  'use strict';
  console.log('navigation controller :: init');
  return module.controller('NavigationCtrl', [
    '$scope', '$location', function($scope, $location) {
      $scope.navigationItems = [
        {
          path: '',
          title: 'Blog'
        }, {
          path: '/collective-works',
          title: 'Collective Works'
        }, {
          path: '/about',
          title: 'About'
        }
      ];
      $scope.isSelected = function(nav) {
        console.log('@isSelected called');
        console.log(nav);
        console.log($location.path());
        if (nav.path === $location.path()) {
          return true;
        } else {
          return false;
        }
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
