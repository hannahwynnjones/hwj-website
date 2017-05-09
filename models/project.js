const mongoose = require('mongoose');
const s3 = require('../lib/s3');

const commentSchema = new mongoose.Schema({
  content: {type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

const projectSchema = new mongoose.Schema({
  name: {type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  image: {type: String},
  description: {type: String, required: true},
  link: {type: String, required: true},
  comments: [commentSchema]
});

projectSchema.methods.belongsTo = function projectBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

projectSchema
  .path('image')
  .set(function getPreviousImage(image){
    this._image = this.image;
    return image;
  });

projectSchema
    .virtual('imageSRC')
    .get(function getImageSRC() {
      if(!this.image) return null;
      return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
    });

projectSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});


projectSchema.pre('remove', function deleteImage(next){
  if (this.image) return s3.deleteObject({Key: this.image}, next);
  next();
});

module.exports = mongoose.model('Project', projectSchema);
