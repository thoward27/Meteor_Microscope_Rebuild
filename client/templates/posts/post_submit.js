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

    //call method for postInsert
    Meteor.call('postInsert', post, function(error, result) {
      //displays error + aborts
      if (error)
        return alert(error.reason);

      if (result.postExists)
        alert('Somebody beat you to that one, sending you to the same post now');

      Router.go('postPage', {_id: result._id});
    });
  }
});
