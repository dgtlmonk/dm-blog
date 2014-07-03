
define ['scripts/controllers/module-base'], (module) ->
    'use strict'
    console.log 'navigation controller :: init'

    ### @ngInject ###
    NavigationController = ($scope, $location) ->
        $scope.navigationItems = [
            { path: '', title:'Blog' }        
            { path: '/collective-works', title:'Collective Works' }        
            { path: '/about', title:'About' }        
        ]
        
        $scope.$watch (
            () ->
                $location.path()

            (path) ->
               # console.log path
                return

        )
        

        ### How NOT TO CREATE A NAV :D this would be called several times ###
        $scope.isSelected = (nav) ->
            # console.log '@isSelected called'
            # console.log nav
            # console.log $location.path()
            isActive = if nav.path is $location.path() then true else false
            # console.log isActive
            isActive
            # $scope.selected is section
           

        $scope.setSelection = ( oNav ) ->
            # console.log 'selection set to ' + section
            
            $scope.selected = section
            return




        $scope.navClass = (page) ->
            console.log $location.path().substring(1)
            currentRoute = $location.path().substring(1) || ''
            alert 'yo'
            if page is currentRoute then 'active-nav' else ''
        return



    module.controller 'NavigationCtrl', NavigationController
            



