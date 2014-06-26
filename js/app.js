KISSY.add(function(S, IO, Node, waitingIndicator) {
  return function() {
    new IO({
      url: 'content.md',
      context: window,
      complete: function(data) {
        // 将内容解析并插入到DOM
        var parsed = markdown.toHTML(data);
        Node.one('.content').html(parsed);
        waitingIndicator.decRef();
      }
    });
  }
}, {
  requires: ['io', 'node', 'wd/component/waiting-indicator']
})