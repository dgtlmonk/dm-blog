define(['require', 'angular', 'scripts/app'], function(require, ng, app) {
  return require(['domReady!'], function(doc) {
    ng.bootstrap(doc, ['digitalmonkstudio']);
  });
});
