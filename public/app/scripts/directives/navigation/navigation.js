define(['scripts/directives/module-base', 'jquery'], function(module) {
  'use strict';

  /* @ngInject */
  var MainNavigation;
  MainNavigation = function($rootScope, $http, $location) {
    return {
      restrict: 'AC',
      link: function($scope, el) {
        $scope.$on('$stateChangeSuccess', function() {
          var selectors;
          console.log($location.path());
          selectors = ['li > [href="/#' + $location.path() + '"]', 'li > [href="#' + $location.path() + '"]', 'li > [href="' + $location.path() + '"]'];
          $(el).find(selectors.join(',')).parent('li').addClass('active').siblings('li').removeClass('active');
        });
      },
      scope: {
        post: '='
      }
    };
  };
  module.directive('mainNavigation', MainNavigation);
  console.log('::Navigation Directive defined ::');
});
