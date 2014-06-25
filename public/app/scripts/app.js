define(['angular', 'angular-route'], function(angular) {
  return angular.module('digitalmonkstudio', ['ngRoute']).config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ]);
});
