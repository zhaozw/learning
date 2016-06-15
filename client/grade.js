Template.grade.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('posts');
    	self.subscribe('users');
    	self.subscribe('items');
    	self.subscribe('uploads');
    	self.subscribe('grade');
    	self.subscribe('emotion');
	});
});

Template.grade.helpers({
	posts: function(){
		return Posts.find({}, {sort: {timestamp: '-1'}});
	},
  	users: function(){
    	return Meteor.users.find({})
  	},
  	items:function(){
  		return Items.find({},{sort:{timestamp:'-1'}});
  	},
  	uploads:function(){
  		return Uploads.find({},{sort:{timestamp:'-1'}});
  	},
  	grade:function(){
  		return Grade.find({},{sort:{timestamp:'-1'}});
  	},
  	emotion:function(){
  		return Emotion.find({},{sort:{timestamp:'-1'}});
  	},
});
