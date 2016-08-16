Template.mNavbar.events({
	'click #logout': function(e){


		Meteor.logout(function(error){
			if(error){
				console.log(error);
			} else {
				FlowRouter.go('/admin')
			}
		});
	},
	'submit #blogPost': function(e){

		var inputVal = $('#blog-value').val();
		var inputTitle = $('#blog-title').val();
		var userId = Meteor.userId();
		var inputZhang = $('#blog-zhang').val();
		var inputJie = $('#blog-jie').val();
		var inputPic="http://o92pn9elr.bkt.clouddn.com/"+$('#blog-pic').val();
		var inputDoc="http://o92pn9elr.bkt.clouddn.com/"+$('#blog-doc').val();
		var inputVideo=""+$('#blog-video').val();
		var pic =$('#blog-pic').val();
		var doc=$('#blog-doc').val();
		var video=$('#blog-video').val();
		Meteor.call('createPost', inputTitle, inputVal, userId,inputZhang,inputJie,inputPic,inputDoc,inputVideo,pic,doc,video, function(error){
			if(error){
				alert("There was an error: " + error);
				FlowRouter.go("/admin");
			} else {
				$('#blog-value').val("");
				$('#blog-title').val("");
				$('#blog-zhang').val("");
				$('#blog-jie').val("");
				$('#blog-pic').val("");
				$('#blog-doc').val("");
				$('#blog-video').val("");
				FlowRouter.go("/admin");
			}
		});
		$('#myModal').modal('hide');
		FlowRouter.go("/admin");
	},
	'submit #grade': function(e){

		var inputGrade = $('#grade-value').val();
		var inputClass = $('#grade-title').val();
		var userId = Meteor.userId();
		var inputZhang = $('#grade-zhang').val();
		var inputJie = $('#grade-jie').val();

		Meteor.call('createGrade', inputClass, inputZhang,inputJie,inputGrade, userId, function(error){
			if(error){
				alert("There was an error: " + error);
				FlowRouter.go("/admin");
			} else {
				$('#grade-value').val("");
				$('#grade-title').val("");
				$('#grade-zhang').val("");
				$('#grade-jie').val("");
				FlowRouter.go("/admin");
			}
		});
		$('#myGrade').modal('hide');
		FlowRouter.go("/admin");
	},
	'submit #exam': function(e){

		var inputExam = $('#exam-value').val();
		var inputClass = $('#exam-title').val();
		var userId = Meteor.userId();
		var inputZhang = $('#exam-zhang').val();
		var inputJie = $('#exam-jie').val();

		Meteor.call('createExam', inputClass, inputZhang,inputJie,inputExam, userId, function(error){
			if(error){
				alert("There was an error: " + error);
				FlowRouter.go("/admin");
			} else {
				$('#exam-value').val("");
				$('#exam-title').val("");
				$('#exam-zhang').val("");
				$('#exam-jie').val("");
				FlowRouter.go("/admin");
			}
		});
		$('#myGrade').modal('hide');
		FlowRouter.go("/admin");
	},
	'submit #emotion': function(e){

		var inputVal = $('#emotion-value').val();putClass = $('#emotion-title').val();
		var userId = Meteor.userId();
		var inputZhang = $('#emotion-zhang').val();
		var inputJie = $('#emotion-jie').val();

		Meteor.call('createEmotion', inputClass, inputZhang,inputJie,inputVal, userId,function(error){
			if(error){
				alert("There was an error: " + error);
				FlowRouter.go("/admin");
			} else {
				$('#emotion-value').val("");
				$('#emotion-title').val("");
				$('#emotion-zhang').val("");
				$('#emotion-jie').val("");
				FlowRouter.go("/admin");
			}
		});
		$('#myEmotion').modal('hide');
		FlowRouter.go("/admin");
	},

});