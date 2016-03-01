(function(){
Template.__checkName("postPage");
Template["postPage"] = new Template("Template.postPage", (function() {
  var view = this;
  return HTML.DIV({
    "class": "post-page page"
  }, "\n    ", Spacebars.include(view.lookupTemplate("postItem")), "\n  ");
}));

}).call(this);
