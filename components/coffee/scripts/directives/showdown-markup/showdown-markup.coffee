define ['scripts/directives/module-base'], (module) ->
    'use strict'
    # module definition
    module.directive 'showdownMarkup', ($rootScope, $http) ->
        {
            restrict: 'EA'
            scope: {
                post:'='
            }
        }
    return
    
