define ['scripts/controllers/module-base'], (module) ->
    'use strict'
    console.log 'navigation controller :: init'
    module.controller 'NavigationCtrl', ['$scope','$location', ($scope, $location) ->
        $scope.navigationItems = [
            { path: '', title:'Blog' }        
            { path: '/collective-works', title:'Collective Works' }        
            { path: '/about', title:'About' }        
        ]


        $scope.isSelected = (nav) ->
            console.log '@isSelected called'
            console.log nav
            console.log $location.path()
            if nav.path is $location.path() then true else false
            # $scope.selected is section
           

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
