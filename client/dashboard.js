Template.dashboard.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('posts');
    	self.subscribe('users');
    	self.subscribe('items');
    	self.subscribe('uploads');
	});
});

Template.dashboard.helpers({
	posts: function(){
		return Posts.find({}, {sort: {timestamp: '-1'}});
	},
  users: function(){
    return Meteor.users.find({})
  }
});
