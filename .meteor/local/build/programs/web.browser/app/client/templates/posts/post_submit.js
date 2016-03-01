(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/posts/post_submit.js                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.postSubmit.events({                                           // 1
  'submit form': function (e) {                                        // 2
    e.preventDefault();                                                // 3
                                                                       //
    var post = {                                                       // 5
      url: $(e.target).find('[name=url]').val(),                       // 6
      title: $(e.target).find('[name=title]').val()                    // 7
    };                                                                 //
                                                                       //
    post._id = Posts.insert(post);                                     // 10
    Router.go('postPage', post);                                       // 11
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
