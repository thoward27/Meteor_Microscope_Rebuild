(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return HTML.BODY("\n    ", HTML.DIV({
    "class": "container"
  }, "\n      ", Spacebars.include(view.lookupTemplate("header")), "\n      ", HTML.DIV({
    id: "main"
  }, "\n        ", Spacebars.include(view.lookupTemplate("yield")), "\n      "), "\n    "), "\n  ");
}));

}).call(this);
