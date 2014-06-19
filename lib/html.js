// source https://github.com/emnh/test/blob/master/static/coffee/html.coffee

var makeH;

makeH = function() {
  var html, makeTagDef, tag, tags, _i, _len;
  html = {};
  tags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
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
