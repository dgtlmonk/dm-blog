define ['scripts/controllers/module-base'], (module) ->
    'use strict'
    console.log 'navigation controller :: init'
    module.controller 'NavigationCtrl', ['$scope','$location', ($scope, $location) ->
        $scope.isSelected = (section) ->
            $scope.selected is section
           

        $scope.setSelection = (section) ->
            console.log 'selection set to ' + section
            $scope.selected = section
            return




        $scope.navClass = (page) ->
            console.log $location.path().substring(1)
            currentRoute = $location.path().substring(1) || ''
            alert 'yo'
            if page is currentRoute then 'active-nav' else ''
        return
    ]
