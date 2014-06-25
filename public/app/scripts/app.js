define(['angular', 'angular-route', 'angular-ui-router'], function(angular) {
  var app;
  app = angular.module('digitalmonkstudio', ['ui.router']);
  app.config(function($stateProvider, $urlRouterProvider) {
    console.log('app::config::state provider initiated::');
    $stateProvider.state('blog', {
      url: '',
      templateUrl: '../app/partials/blog/blog.html'
    }).state('about', {
      url: '/about',
      templateUrl: '../app/partials/about/about.html'
    });
  });
  return app;
});
