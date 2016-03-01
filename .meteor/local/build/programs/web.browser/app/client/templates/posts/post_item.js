(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/posts/post_item.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.postItem.helpers({                                            // 1
  domain: function () {                                                // 2
    var a = document.createElement('a');                               // 3
    a.href = this.url;                                                 // 4
    return a.hostname;                                                 // 5
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
