Template.navbar.events({
	'click #logout': function(e){
		e.preventDefault();

		Meteor.logout(function(error){
			if(error){
				console.log(error);
			} else {
				FlowRouter.go('/')
			}
		});
	},
	'submit #blogPost': function(e){
		e.preventDefault();
		var inputVal = $('#blog-value').val();
		var inputTitle = $('#blog-title').val();
		var userId = Meteor.userId();
		var inputZhang = $('#blog-zhang').val();
		var inputJie = $('#blog-jie').val();
		var inputPic="http://182.254.152.86:3000/upload/"+$('#blog-pic').val();
		var inputDoc="http://182.254.152.86:3000/upload/"+$('#blog-doc').val();
		var inputVideo=$('#blog-video').val();

		Meteor.call('createPost', inputTitle, inputVal, userId,inputZhang,inputJie,inputPic,inputDoc,inputVideo, function(error){
			if(error){
				alert("There was an error: " + error);
				FlowRouter.go("/");
			} else {
				$('#blog-value').val("");
				$('#blog-title').val("");
				$('#blog-zhang').val("");
				$('#blog-jie').val("");
				$('#blog-pic').val("");
				$('#blog-doc').val("");
				$('#blog-video').val("");
				FlowRouter.go("/");
				FlowRouter.go("/");
			}
		});
		$('#myModal').modal('hide');
		FlowRouter.go("/");
	},
	'submit #grade': function(e){
		e.preventDefault();
		var inputGrade = $('#grade-value').val();
		var inputClass = $('#grade-title').val();
		var userId = Meteor.userId();
		var inputZhang = $('#grade-zhang').val();
		var inputJie = $('#grade-jie').val();

		Meteor.call('createGrade', inputClass, inputZhang,inputJie,inputGrade, userId, function(error){
			if(error){
				alert("There was an error: " + error);
				FlowRouter.go("/");
			} else {
				$('#grade-value').val("");
				$('#grade-title').val("");
				$('#grade-zhang').val("");
				$('#grade-jie').val("");
				FlowRouter.go("/grade");
				FlowRouter.go("/grade");
			}
		});
		$('#myGrade').modal('hide');
		FlowRouter.go("/grade");
	},
	'submit #emotion': function(e){
		e.preventDefault();
		var inputVal = $('#emotion-value').val();
		var inputClass = $('#emotion-title').val();
		var userId = Meteor.userId();
		var inputZhang = $('#emotion-zhang').val();
		var inputJie = $('#emotion-jie').val();

		Meteor.call('createEmotion', inputClass, inputZhang,inputJie,inputVal, userId,function(error){
			if(error){
				alert("There was an error: " + error);
				FlowRouter.go("/emotion");
			} else {
				$('#emotion-value').val("");
				$('#emotion-title').val("");
				$('#emotion-zhang').val("");
				$('#emotion-jie').val("");
				FlowRouter.go("/emotion");
				FlowRouter.go("/emotion");
			}
		});
		$('#myEmotion').modal('hide');
		FlowRouter.go("/emotion");
	},

});