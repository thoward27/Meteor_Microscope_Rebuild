Template.postSubmit.onCreated(function() {
  Session.set('postSubmitErrors', {});
});

Template.postSubmit.helpers({
  //looks at field and session variable for errors
  errorMessage: function(field) {
    return Session.get('postSubmitErrors')[field];
  },
  //sets has-errors class to fields with errors
  errorClass: function(field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.postSubmit.events({
  //submit event hook
  'submit form': function(e) {
    //prevents default behavior of submit button
    e.preventDefault();

    //creates post variable to send to method
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };
    
    //create errors var, fill it with validatePost function, display errors if title or url through session set
    var errors = validatePost(post);
    if (errors.title || errors.url)
      return Session.set('postSubmitErrors', errors);

    //call method for postInsert
    Meteor.call('postInsert', post, function(error, result) {
      //displays error + aborts
      if (error)
        return throwError(error.reason);

      if (result.postExists)
        throwError('Somebody beat you to that one, sending you to the same post now');

      Router.go('postPage', {_id: result._id});
    });
  }
});
