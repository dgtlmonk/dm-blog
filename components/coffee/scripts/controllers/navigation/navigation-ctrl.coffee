define ['scripts/controllers/module-base'], (module) ->
    'use strict'

    module.controller 'NavigationCtrl', ['$scope','$location', ($scope, $location) ->
        $scope.navClass = (page) ->
            console.log $location.path().substring(1)
            currentRoute = $location.path().substring(1) || ''
            if page is currentRoute then 'active-nav' else ''
        return
    ]
