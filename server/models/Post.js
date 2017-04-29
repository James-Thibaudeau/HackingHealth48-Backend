// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
      type: String,
      required: true
  },
  photo: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
    comments: {
    type: Array, 
    required:true
  },
    upvotes: {
        type: Number,
        required: true
    }
  
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;