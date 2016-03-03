//creates posts collection
Posts = new Mongo.Collection('posts');

//allow
Posts.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
//deny
Posts.deny({
  update: function(userId, post, fieldNames) {
    //deny updates if length of field names other than url and title are greater than 0
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});
Posts.deny({
  update: function(userId, post, fieldNames, modifier) {
    var errors = validatePost(modifier.$set);
    return errors.title || errors.url;
  }
});

//insert method
Meteor.methods({
  postInsert: function(postAttributes){
    //meteor checks on passed attributes and user
     check(Meteor.userId(), String);
     check(postAttributes, {
       title: String,
       url: String
     });
     //error checking
     var errors = validatePost(postAttributes);
     if (errors.title || errors.url)
      throw new Meteor.Error('invalid-post', "Please fill out all fields to submit a post.");

     //lets check to see if the post is already on our boards
     var postWithSameLink = Posts.findOne({url: postAttributes.url});
     //if duplicate exists
     if (postWithSameLink) {
       return {
         postExists: true,
         _id: postWithSameLink._id
       };
     }

     //establish a user variable
     var user = Meteor.user();
     //adds sensitive information here, rather than on client. IF allowed on client manipulation could occur. Uses underscore library
     var post = _.extend(postAttributes, {
       userId: user._id,
       author: user.username,
       submitted: new Date()
     });
     //sets postID, insert command returns id
     var postId = Posts.insert(post);
     //tells the method to return the postId, allows routing to post
     return {
       _id: postId
     };
  },
  //potential update method
  postUpdate: function(postAttributes){
    var ownDoc = ownsDocument(userId, post);
    if (! ownDoc) {
      return post._id;
    }
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String
    });

    var postWithSameLink = Posts.findOne({url: postAttributes.url});

    if(postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id
      };
    }


  }
});

validatePost = function(post) {
  var errors = {};

  if (!post.title)
    errors.title = "Please fill in a title";

  if (!post.url)
    errors.url = "Please fill in an address";

  return errors;
};
