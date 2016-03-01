(function(){
Template.__checkName("postsList");
Template["postsList"] = new Template("Template.postsList", (function() {
  var view = this;
  return HTML.DIV({
    "class": "posts"
  }, "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("posts"));
  }, function() {
    return [ "\n      ", Spacebars.include(view.lookupTemplate("postItem")), "\n    " ];
  }), "\n  ");
}));

}).call(this);
