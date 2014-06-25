require.config({
    paths :{
        'angular':'./vendor/angular/angular.min',
        'angular-ui-router':'./vendor/angular-ui-router/release/angular-ui-router',
        'domReady':'./vendor/requirejs-domready/domReady',
        'angular-route':'./vendor/angular-route/angular-route',
        'angular-ui-router':'./vendor/angular-ui-router/release/angular-ui-router'
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
