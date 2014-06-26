KISSY.config({
  packages: {
    'tb': {
      base: 'http://g.tbcdn.cn/kissy/k/1.4.4',
      ignorePackageNameInUri: true
    },
    'wd': {
      base: '/js',
      ignorePackageNameInUri: true
    }
  }
});

KISSY.use('wd/component/waiting-indicator, wd/app',
  function(S, waitingIndicator, App) {

  waitingIndicator.incRef(); // waiting: 加载内容

  KISSY.getScript('js/markdown.min.js', {
    success: function() {
      new App();
    }
  });

});