Meteor.methods ({
	'createPost': function(inputTitle, inputVal, userId,inputZhang,inputJie){
 		check(userId, String);
 		check(inputTitle, String);
 		check(inputVal, String);
    check(inputZhang, String);
    check(inputJie, String);

    Posts.insert({
    	title: inputTitle,
		 	description: inputVal,
		 	user: userId,
      zhang:inputZhang,
      jie:inputJie,
		 	timestamp: new Date()
		});
  },
  'removePost': function(postId){
  	Posts.remove({_id: postId})
  },
  'updatePost': function(postId, title, desc,zhang,jie){
    check(postId, String);
    check(title, String);
    check(desc, String);
    check(zhang, String);
    check(jie, String);

    Posts.update({_id: postId}, {$set: {title: title, description: desc,zhang:zhang,jie:jie}});
  }
})