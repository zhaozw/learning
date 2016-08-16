FlowRouter.route('/', {
	action: function(params, queryParams){
		BlazeLayout.render('index')
	}
});
FlowRouter.route('/admin', {
	action: function(params, queryParams){
		BlazeLayout.render('admin')
	}
});

FlowRouter.route('/login', {
	action: function(params, queryParams){
		BlazeLayout.render('login')
	}
});
FlowRouter.route('/register', {
    action: function(params, queryParams) {
    	BlazeLayout.render('register')
    }
});
FlowRouter.route('/signin', {
    action: function(params, queryParams) {
    	BlazeLayout.render('signin')
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
FlowRouter.route('/exam',{
	action:function(params,queryParams){
		BlazeLayout.render('exam')
	}
});