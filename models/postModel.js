const mongoose = require('mongoose');

// Schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 500,
    },
    content: {
      type: String,
      maxlength: 1000,
    },
    img: {
      type: String,
    },
    creator: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      require: [true, 'Post must belong to a User'],
    },
  },
  {
    timestamps: true,
  }
);

// Model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
