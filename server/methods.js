Meteor.methods ({
	'createPost': function(inputTitle, inputVal, userId,inputZhang,inputJie,inputPic,inputDoc,inputVideo){
 		check(userId, String);
 		check(inputTitle, String);
 		check(inputVal, String);
    check(inputZhang, String);
    check(inputJie, String);
    check(inputPic,String);
    check(inputDoc,String);
    check(inputVideo,String);

    Posts.insert({
    	title: inputTitle,
		 	description: inputVal,
		 	user: userId,
      zhang:inputZhang,
      jie:inputJie,
      pic:inputPic,
      doc:inputDoc,
      video:inputVideo,
		 	timestamp: new Date()
		});
  },
  'createEmotion':function(inputClass,inputZhang,inputJie,inputVal,userId){
      check(userId, String);
      check(inputClass,String);
      check(inputVal, String);
      check(inputZhang, String);
      check(inputJie, String);

    Emotion.insert({
      class: inputClass,
      description: inputVal,
      user: userId,
      zhang:inputZhang,
      jie:inputJie,
      timestamp: new Date()
    });
  },
  'removeEmotion':function(emotionId){
      Emotion.remove({_id: emotionId})
  },
  'createGrade':function(inputClass,inputZhang,inputJie,inputGrade,userId){
      check(userId, String);
      check(inputClass, String);
      check(inputGrade, String);
      check(inputZhang, String);
      check(inputJie, String);

    Grade.insert({
      class: inputClass,
      description: inputGrade,
      user: userId,
      zhang:inputZhang,
      jie:inputJie,
      timestamp: new Date()
    });
  },
  'removePost': function(postId){
  	Posts.remove({_id: postId})
  },
  'updatePost': function(postId, title, desc,zhang,jie,pic){
    check(postId, String);
    check(title, String);
    check(desc, String);
    check(zhang, String);
    check(jie, String);
    check(pic,String);

    Posts.update({_id: postId}, {$set: {title: title, description: desc,zhang:zhang,jie:jie,pic:pic}});
  },
  'deleteFile': function(_id) {
    check(_id, String);

    var upload = Uploads.findOne(_id);
    if (upload == null) {
      throw new Meteor.Error(404, 'Upload not found'); // maybe some other code
    }

    UploadServer.delete(upload.path);
    Uploads.remove(_id);
  }
})