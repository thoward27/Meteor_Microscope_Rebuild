(function(){
Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default",
    role: "navigation"
  }, "\n    ", HTML.DIV({
    "class": "navbar-header"
  }, "\n      ", HTML.Raw('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation">\n        <span class="sr-only">Toggle Navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>'), "\n      ", HTML.A({
    "class": "navbar-brand",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "postsList");
    }
  }, "Microscope"), "\n    "), "\n    ", HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "navigation"
  }, "\n      ", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "postSubmit");
    }
  }, "Submit a Post")), "\n      "), "\n      ", HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, Spacebars.include(view.lookupTemplate("loginButtons"))), "\n    "), "\n  ");
}));

}).call(this);
