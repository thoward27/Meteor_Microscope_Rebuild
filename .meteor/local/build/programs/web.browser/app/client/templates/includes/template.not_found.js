(function(){
Template.__checkName("notFound");
Template["notFound"] = new Template("Template.notFound", (function() {
  var view = this;
  return HTML.Raw('<div class="not-found page jumbotron">\n    <h2></h2>\n    <p>Sorry, we couldn\'t find the page you were looking for :(</p>\n  </div>');
}));

}).call(this);
