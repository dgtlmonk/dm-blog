define(['angular', 'angular-route', 'angular-ui-router', 'dm.index.directives'], function(angular) {
  var app;
  app = angular.module('digitalmonkstudio', ['ui.router', 'digitalmonkstudio.directives']);
  app.config(function($stateProvider, $urlRouterProvider) {
    console.log('app::config::state provider init::');
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
