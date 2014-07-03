define(['scripts/controllers/module-base'], function(module) {
  'use strict';
  var NavigationController;
  console.log('navigation controller :: init');

  /* @ngInject */
  NavigationController = function($scope, $location) {
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
      var isActive;
      console.log('@isSelected called');
      isActive = nav.path === $location.path() ? true : false;
      console.log(isActive);
      return isActive;
    };
    $scope.setSelection = function(oNav) {
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
  };
  return module.controller('NavigationCtrl', NavigationController);
});
