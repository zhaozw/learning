
Template['media'].helpers({
  myFormData: function() {
    return { directoryName: 'images', prefix: this._id, _id: this._id }
  },
  filesToUpload: function() {
    return Uploader.info.get();
  }
});

Template['uploadedInfo'].helpers({
  src: function() {
    if (this.type.indexOf('image') >= 0) {
      return 'upload/' + this.path;
    } else return 'file_icon.png';
  }
});

Template['uploadedInfo'].events({
  'click .deleteUpload':function() {
    if (confirm('确定删除?')) {
      Meteor.call('deleteFile', this._id);
    }
  }
});