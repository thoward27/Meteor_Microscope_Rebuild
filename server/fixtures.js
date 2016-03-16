if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  //our two base users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Howard' }
  });
  var tom = Meteor.users.findOne(tomId);

  var taylorId = Meteor.users.insert({
    profile: { name: 'Taylor Trinque' }
  });
  var taylor = Meteor.users.findOne(taylorId);


  //posts
  var googleId = Posts.insert({
    title: 'Google',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.google.com',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2
  });
  Comments.insert({
    postId: googleId,
    userId: taylor._id,
    author: taylor.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Let me doodle for it!!!!'
  });
  Comments.insert({
    postId: googleId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'Go for it!'
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000)
  });

  Posts.insert({
    title: 'facebook',
    userId: taylor._id,
    author: taylor.profile.name,
    url: 'https://www.facebook.com',
    submitted: new Date(now - 12 * 3600 * 1000)
  });

  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Le post' + i,
      author: taylor.profile.name,
      userId: taylor._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: new Date(now - i * 3600 * 1000),
      commentsCount: 0
    });
  }
}
