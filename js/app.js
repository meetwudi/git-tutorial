KISSY.add(function(S, IO, Node, waitingIndicator) {
  return function() {
    new IO({
      url: 'content.md',
      context: window,
      complete: function(data) {
        // 内容解析
        // 块级代码（pre>code）外层的pre加上code-block这个类
        // 行内代码（code）自身加上code-inline这个类
        var tree = markdown.parse(data),
          addNodeAttr = function(node, key, value) {
            var attr;
            if (Array.isArray(node[1]) || typeof node[1] === 'string') {
              attr = {};
              attr[key] = value;
              node.splice(1, 0, attr);
            }
            else {
              node[1][key] = value;
            }
          };

        (function processNode(node) {
          if (node[0] === 'code_block') {
            addNodeAttr(node, 'class', 'code-block');
          }
          else if (node[0] === 'inlinecode') {
            addNodeAttr(node, 'class', 'code-inline');
          }

          for (var i = 1; i < node.length; i ++) {
            if (Array.isArray(node[i])) {
              processNode(node[i]);
            }
          }
        })(tree);

        // 渲染到DOM
        var parsed = markdown.renderJsonML( markdown.toHTMLTree( tree ) );
        Node.one('.content').html(parsed);
        waitingIndicator.decRef();
      }
    });
  }
}, {
  requires: ['io', 'node', 'wd/component/waiting-indicator']
})