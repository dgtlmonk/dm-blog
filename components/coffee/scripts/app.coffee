define ['angular','angular-route'], (angular) ->
    angular.module 'digitalmonkstudio',['ngRoute']
        .config(['$routeProvider','$locationProvider', ($routeProvider, $locationProvider) ->
            $locationProvider.html5Mode true
            return           
        ])

