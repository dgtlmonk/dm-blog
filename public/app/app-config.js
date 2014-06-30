require.config({
    paths :{
        'angular':'./vendor/angular/angular.min',
        'angular-ui-router':'./vendor/angular-ui-router/release/angular-ui-router',
        'domReady':'./vendor/requirejs-domready/domReady',
        'angular-route':'./vendor/angular-route/angular-route',


        // CONTROLLER
        'dm.index.controllers':'./scripts/controllers/index', // app $inject ID
        'dm.base.controllers':'./scripts/controllers/module-base', // module $inject ID
        // controller AMD ID or directly inject on app definition
        'navigationController':'./scripts/controllers/navigation/navigation-ctrl',

        // DIRECTIVES
        'dm.index.directives':'./scripts/directives/index', // app $inject ID
        'dm.base.directives':'./scripts/directives/module-base', // module base $inject ID
        'showdownMarkup':'./scripts/directives/showdown-markup/showdown-markup' // directive AMD ID or directly inject on app definition
    },

    shim: {
       'angular': {
            exports:'angular'
       },
        'angular-route': {
            exports:'angular-route'
        },
        'angular-ui-router': {
            exports:'angular-ui-router'
        },
   },

    // kickstart

    deps:['./bootstrap']
});
