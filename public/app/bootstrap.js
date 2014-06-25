define(['require', 'angular', 'scripts/app'], function(require, ng) {
  return require(['domReady!'], function(doc) {
    ng.bootstrap(doc, ['digitalmonkstudio']);
  });
});
