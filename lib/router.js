//hook for login auth
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};

//basic configuration settings
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    //only subscribe to posts at initial load
    return [Meteor.subscribe('posts'), Meteor.subscribe('notifications')];
  }
});

//home route
Router.route('/', {name: 'postsList'});

//routing for post page
Router.route('/posts/:_id' ,{
  name: 'postPage',
  //load the comments for each post
  waitOn: function() { return Meteor.subscribe('comments', this.params._id); },
  data: function() { return Posts.findOne(this.params._id); }
});

//route for post-edit
Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
});

//submit route
Router.route('/submit', {name: 'postSubmit'});

//before route actions
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
