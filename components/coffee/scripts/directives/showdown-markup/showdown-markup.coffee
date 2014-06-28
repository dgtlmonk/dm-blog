define ['scripts/directives/module-base'], (module) ->
    'use strict'
    console.log '::showdownMarkup directive initiated ::'

    # module definition
    module.directive 'showdownMarkup', ['$rootScope','$http'], ($scope, $http) ->
        return;
    
