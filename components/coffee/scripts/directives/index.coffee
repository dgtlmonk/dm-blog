define ['angular'], (angular) ->
    'use strict'
    console.log 'digitalmonkstudio.directives::init'
    
    # define app directives deps
    define ['showdownMarkup'], (d)-> # refer to app-config for the paths
    # define ['dm.index.directives','dm.index.controllers'], (d, nav)-> # refer to app-config for the paths
        console.log 'showdownMarkup directive defined ::' + d
        # console.log 'navigationController defined ::' + nav
        return

    return


