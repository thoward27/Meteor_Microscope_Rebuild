Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
    //only allow a post through if logged in
    return !! userId;
  }
});
