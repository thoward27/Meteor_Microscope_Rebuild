if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Google',
    url: 'http://www.google.com'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://www.meteor.com'
  });

  Posts.insert({
    title: 'meteor book',
    url: 'http://www.themeteorbook.com'
  });

}
