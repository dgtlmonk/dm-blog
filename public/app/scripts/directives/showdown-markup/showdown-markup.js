define(['scripts/directives/module-base'], function(module) {
  'use strict';
  module.directive('showdownMarkup', ["$rootScope", "$http", function($rootScope, $http) {
    return {
      restrict: 'EA',
      scope: {
        post: '='
      }
    };
  }]);
});
