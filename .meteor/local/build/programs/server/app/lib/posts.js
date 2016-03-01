(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/posts.js                                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Posts = new Mongo.Collection('posts');                                 // 1
                                                                       //
Posts.allow({                                                          // 3
  insert: function (userId, doc) {                                     // 4
    //only allow a post through if logged in                           //
    return !!userId;                                                   // 6
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=posts.js.map
