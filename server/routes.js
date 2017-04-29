var express = require('express');
var router = express.Router();
var PostController = require('./controllers/PostController');

//get posts
router.route('/posts/getAll').get(PostController.getPosts);

//new post
router.route('/posts/newPost').post(PostController.newPost);

//get post by id
router.route('/posts/getByID/:id').get(PostController.getPostByID);

//remove post
router.route('/posts/removePost/:id').delete(PostController.removePost);

//upvote
router.route('/posts/upvote/:id').post(PostController.upvote);



module.exports = router;