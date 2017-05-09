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

const blogSchema = new mongoose.Schema({
  name: {type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  image: {type: String},
  body: {type: String, required: true},
  comments: [commentSchema]
});

blogSchema.methods.belongsTo = function blogBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

blogSchema
  .path('image')
  .set(function getPreviousImage(image){
    this._image = this.image;
    return image;
  });

blogSchema
    .virtual('imageSRC')
    .get(function getImageSRC() {
      if(!this.image) return null;
      return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
    });

blogSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});


blogSchema.pre('remove', function deleteImage(next){
  if (this.image) return s3.deleteObject({Key: this.image}, next);
  next();
});

module.exports = mongoose.model('Blog', blogSchema);
