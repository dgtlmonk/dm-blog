define(['require','angular','scripts/app'], function(require, ng){

    require(['domReady!'], function (doc) {

        ng.bootstrap(doc,['digitalmonkstudio']); // manually start 'digitalmonkstudio' app
    })
});

