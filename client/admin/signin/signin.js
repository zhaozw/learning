Template.signin.events({
	'submit #loginForm': function(e){
		e.preventDefault();

		Meteor.loginWithPassword($('#email').val(), $('#password').val(), function(error){
			if(error){
				alert(error);
			} else {
				FlowRouter.go('/admin')
			}
		});
	}
});	