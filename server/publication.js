Meteor.publish('posts', function(){
	// Returns all the messages
	return Posts.find({});
})

Meteor.publish('users', function(){
  return Meteor.users.find({});
})