Template.registerHelper("usernameFromId", function (userId){
	var user = Meteor.users.findOne(userId);

	if(typeof user === "undefined"){
		return "";
	}
	return user.username;
});

Template.registerHelper("showDelete", function(post, currentUser){
	var post = Posts.findOne({title: post.title});
	if(post.user === currentUser._id){
		return true;
	} else {
		return false;
	}
});