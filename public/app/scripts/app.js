define(['angular', 'angular-route', 'angular-ui-router', 'navigation', 'showdown-markup-bootstrap'], function(angular) {
  var app;
  app = angular.module('digitalmonkstudio', ['ui.router', 'digitalmonkstudio.controllers']);
  app.config(function($stateProvider, $urlRouterProvider) {
    console.log('app::config::state provider initiated::');
    $stateProvider.state('blog', {
      url: '',
      templateUrl: './app/partials/blog/blog.html'
    }).state('about', {
      url: '/about',
      templateUrl: './app/partials/about/about.html'
    }).state('collective-works', {
      url: '/collective-works',
      templateUrl: './app/partials/collective-works/collective-works.html'
    });
  });
  return app;
});
