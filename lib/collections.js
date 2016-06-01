Posts = new Mongo.Collection("posts");
Meteor.startup(function(){
	
	

});
Items = new Mongo.Collection('items');
Uploads = new Mongo.Collection('uploads');

Uploads.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true
  }
});