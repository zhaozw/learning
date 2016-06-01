Meteor.publish('posts', function(){
	// Returns all the messages
	return Posts.find({});
});

Meteor.publish('users', function(){
  return Meteor.users.find({});
});
Meteor.publish('items', function() {
  return Items.find();
});

Meteor.publish('uploads', function() {
  return Uploads.find();
});