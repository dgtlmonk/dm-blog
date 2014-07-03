define ['angular'], (angular) ->
    'use strict'
    console.log 'application dependencies ::init'
    
    # define app directives deps
    define ['showdownMarkup','navigationDirective','navigationController'], ()-> # refer to app-config for the paths
    # define ['dm.index.directives','dm.index.controllers'], ()-> # refer to app-config for the paths
        console.log 'application dependencies defined ::'
        return

    return

