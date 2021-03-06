require.config({
    paths :{
        'angular':'./vendor/angular/angular.min',
        'angular-ui-router':'./vendor/angular-ui-router/release/angular-ui-router',
        'domReady':'./vendor/requirejs-domready/domReady',
        'angular-route':'./vendor/angular-route/angular-route',
        'angular-ui-router':'./vendor/angular-ui-router/release/angular-ui-router',
        'jquery':'//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',

        'appDependencies':'./scripts/app-deps',

        // 'dm.index.controllers':'./scripts/controllers/index', // app $inject ID
        'navigationController':'./scripts/controllers/navigation/navigation-ctrl', // controller AMD ID or directly inject on app definition

        // 'dm.index.directives':'./scripts/directives/index', // app $inject ID
        'showdownMarkup':'./scripts/directives/showdown-markup/showdown-markup', // directive AMD ID or directly inject on app definition
        'navigationDirective':'./scripts/directives/navigation/navigation' // directive AMD ID or directly inject on app definition
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
        }
    },

    // kickstart

    deps:['./bootstrap']
});
