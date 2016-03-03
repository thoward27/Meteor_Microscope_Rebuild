Meteor.publish('posts', function() {
  return Posts.find();
});

//publish comments, only for current page and check that postId is valid
Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
});
