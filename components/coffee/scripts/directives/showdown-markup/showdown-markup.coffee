define ['scripts/directives/module-base'], (module) ->
    'use strict'
    
    ### @ngInject ###
    ShowdowMarkup = ($rootScope, $http) ->
        {
            restrict: 'EA'
            scope: {
                post:'='
            }
        }


    # module definition
    module.directive 'showdownMarkup', ShowdowMarkup
    return

    
