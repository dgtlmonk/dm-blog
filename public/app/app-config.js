require.config({
    paths :{
        'angular':'./vendor/angular/angular.min',
        'angular-ui-router':'./vendor/angular-ui-router/release/angular-ui-router',
        'domReady':'./vendor/requirejs-domready/domReady',
        'angular-route':'./vendor/angular-route/angular-route',
        'angular-ui-router':'./vendor/angular-ui-router/release/angular-ui-router',
        'navigation':'./scripts/controllers/navigation/index', // app $inject ID
        'navigation-ctrl':'./scripts/controllers/navigation/navigation-ctrl', // controller AMD ID
        'showdown-markup-bootstrap':'./scripts/directives/showdown-markup/index', // app $inject ID
        'showdown-markup':'./scripts/directives/showdown-markup/showdown-markup' // directive AMD ID
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
