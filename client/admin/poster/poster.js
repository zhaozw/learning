Template.poster.events({
	'click .delete': function(e){

		var post = Posts.findOne({title: this.title, description: this.description});
		if(post.user === Meteor.userId()){
			Meteor.call('removePost', post._id, function(error){
				if(error){
					console.log(error);
				} else {
					console.log("Awesome, deleted!!!");
				}
			});	
		}
	}
});