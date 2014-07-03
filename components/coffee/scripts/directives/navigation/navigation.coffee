define ['scripts/directives/module-base','jquery'], (module) ->
    'use strict'
    
    ### @ngInject ###
    MainNavigation = ($rootScope, $http, $location) ->
        {
            restrict: 'AC'
            link: ($scope, el) ->
                $scope.$on '$stateChangeSuccess', () ->
                    console.log $location.path()
                    selectors = ['li > [href="/#' + $location.path() + '"]'
                                'li > [href="#' + $location.path() + '"]' ## html5: false
                                'li > [href="' + $location.path() + '"]']; ## html5: true
                    # console.log $(el).find(selectors.join(','))
                    $(el).find(selectors.join(','))
                    .parent('li').addClass('active')
                    .siblings('li').removeClass('active')
                    return
                return

                    
                    
                    
            scope: {
                post:'='
            }
        }


    # module definition
    module.directive 'mainNavigation', MainNavigation
    console.log '::Navigation Directive defined ::'

    return

    
