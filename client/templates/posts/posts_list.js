var postsData = [{
    title: 'Google',
    url: 'http://www.google.com',
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com',
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
  },
];
Template.postsList.helpers({
  posts: postsData,
});
