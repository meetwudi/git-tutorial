KISSY.add(function(S, Node) {
  var tpl = '<span id="waiting-indicator"></span>',
    node = new Node(tpl),
    indicator = {
      _refCount: 0
    };

  node.appendTo('body');
  node.hide();

  indicator.incRef = function() {
    this._refCount ++;
    this._update(true);
  };

  indicator.decRef = function() {
    this._refCount --;
    this._update(false);
  };

  indicator._update = function(justIncreased) {
    if (justIncreased && this._refCount === 1) {
      // 显示
      node.show();
    }
    else if (!justIncreased && this._refCount === 0) {
      // 隐藏
      node.hide();
    }
  };

  return indicator;
}, {
  requires: ['node']
});