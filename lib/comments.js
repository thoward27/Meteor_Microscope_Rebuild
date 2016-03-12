Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      postId: String,
      body: String
    });

    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);

    if (!post)
      throw new Meteor.Error('invalid-comment', 'Gonna have to put some text in that first');

    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    //increment the number of comments for a post
    Posts.update(comment.postId, {$inc: {commentsCount: 1}});

    //create le comment, save the id
    comment._id = Comments.insert(comment);

    //new notifications for all of your friends!
    createCommentNotification(comment);


    return comment._id;
  }
});
