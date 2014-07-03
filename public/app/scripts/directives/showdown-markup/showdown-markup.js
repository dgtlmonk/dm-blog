define(['scripts/directives/module-base'], function(module) {
  'use strict';

  /* @ngInject */
  var ShowdowMarkup;
  ShowdowMarkup = function($rootScope, $http) {
    return {
      restrict: 'EA',
      scope: {
        post: '='
      }
    };
  };
  module.directive('showdownMarkup', ShowdowMarkup);
});
