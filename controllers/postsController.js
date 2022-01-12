const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
let cloudinary = require('cloudinary').v2;
const User = require('./../models/userModel');
const Post = require('./../models/postModel');

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

// Returns all the posts in the database
exports.getPosts = catchAsync(async (req, res, next) => {
  const page = req.body.page || 1;
  const limit = req.body.limit || 10;

  const data = await Post.find()
    .populate('creator')
    .sort({ updatedAt: -1 })
    .skip(limit * (page - 1))
    .limit(limit);

  res.json(data);
});

// Creates Post
exports.createPosts = catchAsync(async (req, res, next) => {
  const { title, content } = req.fields;
  const { img } = req.files;
  if (!img && !content) {
    res.json({
      status: 'Failed',
      message: 'Post should have at least one entry',
    });
    return;
  }

  let post;

  if (img) {
    const upRes = await cloudinary.uploader.upload(img.path, {
      upload_preset: 'yocket_task',
    });
    post = await Post.create({
      title: title,
      content: content,
      img: upRes.secure_url,
      creator: req.user._id,
    });
  } else {
    post = await Post.create({
      title: title,
      content: content,
      img: img,
      creator: req.user._id,
    });
  }
  res.status(200).json({
    status: 'Success',
    post: post,
  });
});

// Delete Post
exports.deletePost = catchAsync(async (req, res) => {
  const postId = req.body.postId;
  await Post.findOneAndDelete({ _id: postId });

  res.status(204);
});

// Checks if the user is logged in
exports.protect = catchAsync(async (req, res, next) => {
  let token = null;
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return res.status(200).json({
      status: 'Failed',
      message: 'Please login first',
    });
  }
  const decoded = await promisify(jwt.verify)(token, process.env.SECRET);

  const currentUser = await User.findById({ _id: decoded.id });
  if (!currentUser) {
    return res.status(200).json({
      status: 'Failed',
      message: 'Please login first',
    });
  }
  req.user = currentUser;
  next();
});
