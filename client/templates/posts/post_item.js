Template.postItem.helpers({
  domain: function () {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  //check for ownership
  ownPost: function() {
    return this.userId === Meteor.userId();
  }
});
