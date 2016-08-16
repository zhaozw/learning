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


Meteor.publish('emotion', function() {
  return Emotion.find();
});
Meteor.publish('grade', function() {
  return Grade.find();
});
Meteor.publish('exam', function() {
  return Exam.find();
});