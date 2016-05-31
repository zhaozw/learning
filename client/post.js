Template.post.events({
	'click .delete': function(e){
		e.preventDefault();
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
	},
	'click .update': function(e){
		e.preventDefault();
		var post = Posts.findOne({title: this.title, description: this.description});
		
		$('#myModal').modal('show');
		$('.modal-title').text("Update Post");
		$('#myModal button').addClass("update-submit");
		$('#blog-title').val(post.title);
		$('#blog-value').val(post.description);

		$('.update-submit').on('click', function(e){
			var title = $('#blog-title').val();
			var desc = $('#blog-value').val();
			
			Meteor.call('updatePost', post._id, title, desc, function(error){
				if(error){
					alert(error);
				} else {
					console.log("awesome update u guys");
				}
			});
		})
	}
});