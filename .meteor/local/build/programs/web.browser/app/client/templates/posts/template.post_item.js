(function(){
Template.__checkName("postItem");
Template["postItem"] = new Template("Template.postItem", (function() {
  var view = this;
  return HTML.DIV({
    "class": "post"
  }, "\n    ", HTML.DIV({
    "class": "post-content"
  }, "\n      ", HTML.H3(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("url"));
    }
  }, Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), HTML.SPAN(Blaze.View("lookup:domain", function() {
    return Spacebars.mustache(view.lookup("domain"));
  }))), "\n    "), "\n    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "postPage");
    },
    "class": "discuss btn btn-default"
  }, "Discuss"), "\n  ");
}));

}).call(this);
