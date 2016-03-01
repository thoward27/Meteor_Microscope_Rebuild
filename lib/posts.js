//creates posts collection
Posts = new Mongo.Collection('posts');

//insert method
Meteor.methods({
  postInsert: function(postAttributes){
    //meteor checks on passed attributes and user
     check(Meteor.userId(), String);
     check(postAttributes, {
       title: String,
       url: String
     });
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
  }
});
