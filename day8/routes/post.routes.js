
const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

// Create Post with reference to User
router.post('/', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.send(post);
});

// Get all Posts with populated author
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author');
  res.send(posts);
});

module.exports = router;
