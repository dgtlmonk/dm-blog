require.config({
    paths :{
        'angular':'./vendor/angular/angular.min',
        'angular-ui-router':'./vendor/angular-ui-router/release/angular-ui-router',
        'domReady':'./vendor/requirejs-domready/domReady'
    },

    shim: {
        'angular': {
            exports:'angular'
        }
    },

    // kickstart

    deps:['./bootstrap']
});
