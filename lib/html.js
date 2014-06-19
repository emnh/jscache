// source https://github.com/emnh/test/blob/master/static/coffee/html.coffee

var makeH;

makeH = function() {
  var html, makeTagDef, tag, tags, _i, _len;
  html = {};
  tags = ["script", "div", "span", "p", "ul", "ol", "li", "a", "table", "th", "tr", "td", "colgroup", "col", "thead", "tbody", "h1", "h2", "h3", "h4", "h5", "label", "input", "button"];
  makeTagDef = function(tag) {
    return html[tag] = function(content, attrs) {
      if (attrs == null) {
        attrs = {};
      }
      attrs.html = content;
      return $("<" + tag + "/>", attrs);
    };
  };
  for (_i = 0, _len = tags.length; _i < _len; _i++) {
    tag = tags[_i];
    makeTagDef(tag);
  }
  return html;
};

window.HTML = makeH();
