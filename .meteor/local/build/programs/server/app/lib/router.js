(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
  layoutTemplate: 'layout',                                            // 2
  loadingTemplate: 'loading',                                          // 3
  notFoundTemplate: 'notFound',                                        // 4
  waitOn: function () {                                                // 5
    return Meteor.subscribe('posts');                                  // 5
  }                                                                    //
});                                                                    //
                                                                       //
Router.route('/', { name: 'postsList' });                              // 8
                                                                       //
Router.route('/posts/:_id', {                                          // 10
  name: 'postPage',                                                    // 11
  data: function () {                                                  // 12
    return Posts.findOne(this.params._id);                             // 12
  }                                                                    //
});                                                                    //
                                                                       //
Router.route('/submit', { name: 'postSubmit' });                       // 15
                                                                       //
Router.onBeforeAction('dataNotFound', { only: 'postPage' });           // 17
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=router.js.map
