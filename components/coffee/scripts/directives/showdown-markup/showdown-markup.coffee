define ['scripts/directives/module-base'], (module) ->
    'use strict'
    # module definition
    module.directive 'showdownMarkup', ['$rootScope','$http'], ($scope, $http) ->
        {
            restrict: 'EA'
            scope: {
                post:'='
            }
        }
          
    
