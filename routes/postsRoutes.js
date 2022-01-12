const express = require('express');
const postsController = require('./../controllers/postsController');
const formidable = require('express-formidable');

const router = express.Router();

router.route('/all').get(postsController.getPosts);
router
  .route('/create')
  .post(postsController.protect, formidable(), postsController.createPosts);
router
  .route('/delete')
  .delete(postsController.protect, postsController.deletePost);

module.exports = router;
