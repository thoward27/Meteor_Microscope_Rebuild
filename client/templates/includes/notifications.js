Template.notifications.helpers({
  notifications: function() {
    //find the notifications for the user
    return Notifications.find({userId: Meteor.userId(), read: false});
  },
  notificationCount: function() {
    //count of users notifications
    return Notifications.find({userId: Meteor.userId(), read: false}).count();
  }
});

Template.notificationItem.helpers({
  //route to a comments page
  notificationPostPath: function() {
    return Router.routes.postPage.path({_id: this.postId});
  }
});

Template.notificationItem.events({
  //click on a notification, updates this to read: true
  'click a': function() {
    Notifications.update(this._id, {$set: {read: true}});
  }
});
