//lets run some tests
Tinytest.add("errors - collection", function(test) {
  //make sure we're at 0 errors
  test.equal(Errors.collection.find({}).count(), 0);
  //add error and test if it shows up
  Errors.throw('An error!');
  test.equal(Errors.collection.find({}).count(), 1);
  //cleanup
  Errors.collection.remove({});
});

Tinytest.addAsync("errors - template", function(test, done) {
  Errors.throw('An error!');
  test.equal(Errors.collection.find({}).count(), 1);

  //render the template to test if timeout works right
  UI.render(Template.meteorErrors, document.body);
  //make sure it's at 0 after timeout
  Meteor.setTimeout(function() {
    test.equal(Errors.collection.find({}).count(), 0);
    done();
  }, 3500);
});
