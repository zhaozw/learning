Template.register.events({
	'submit #registerForm': function(e){
		e.preventDefault();
		var userData = {
			username: $('#username').val(),
			email: $('#email').val(),
			password: $('#password').val()
		}

		Accounts.createUser(userData, function(error) {
			if(error) {
				alert('hey error')
			} else {
				FlowRouter.go('/')
			}
		});
	},

	'click #logout': function(e){
		e.preventDefault();

		Meteor.logout(function(error){
			if(error){
				console.log(error);
			} else {
				FlowRoute.go('/')
			}
		});
	}
});