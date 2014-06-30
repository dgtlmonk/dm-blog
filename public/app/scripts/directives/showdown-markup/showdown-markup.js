define(['scripts/directives/module-base'], function(module) {
  'use strict';
  return module.directive('showdownMarkup', ['$rootScope', '$http'], function($scope, $http) {
    return {
      restrict: 'EA',
      scope: {
        post: '='
      }
    };
  });
});
