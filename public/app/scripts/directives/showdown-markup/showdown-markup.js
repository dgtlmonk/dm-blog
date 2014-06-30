define(['dm.base.directives'], function(module) {
  'use strict';
  console.log('::showdownMarkup directive initiated ::');
  return module.directive('showdownMarkup', ['$rootScope', '$http'], function($scope, $http) {});
});
