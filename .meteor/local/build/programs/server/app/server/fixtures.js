(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/fixtures.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Posts.find().count() === 0) {                                      // 1
  Posts.insert({                                                       // 2
    title: 'Google',                                                   // 3
    url: 'http://www.google.com'                                       // 4
  });                                                                  //
                                                                       //
  Posts.insert({                                                       // 7
    title: 'Meteor',                                                   // 8
    url: 'http://www.meteor.com'                                       // 9
  });                                                                  //
                                                                       //
  Posts.insert({                                                       // 12
    title: 'meteor book',                                              // 13
    url: 'http://www.themeteorbook.com'                                // 14
  });                                                                  //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=fixtures.js.map
