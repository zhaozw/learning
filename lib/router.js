FlowRouter.route('/register', {
    action: function(params, queryParams) {
    	BlazeLayout.render('register')
    }
});

FlowRouter.route('/', {
	action: function(params, queryParams){
		BlazeLayout.render('dashboard')
	}
});

FlowRouter.route('/login', {
	action: function(params, queryParams){
		BlazeLayout.render('login')
	}
});
FlowRouter.route('/admin',{
	action: function(params, queryParams){
		BlazeLayout.render('media')
	}
});
FlowRouter.route('/grade',{
	action:function(params,queryParams){
		BlazeLayout.render('grade')
	}
});
FlowRouter.route('/emotion',{
	action:function(params,queryParams){
		BlazeLayout.render('emotion')
	}
});