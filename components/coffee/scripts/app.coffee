define ['angular','angular-route','angular-ui-router'], (angular) ->
    app = angular.module 'digitalmonkstudio',['ui.router']

    app.config( ($stateProvider, $urlRouterProvider) ->
            # $locationProvider.html5Mode true
            console.log 'app::config::state provider initiated::'

            $stateProvider
            .state 'blog', {
                url: ''
                templateUrl:'../app/partials/blog/blog.html'
            }
            .state 'about', {
                url:'/about'
                templateUrl:'../app/partials/about/about.html'
            }

            return
                     
        )
    app

