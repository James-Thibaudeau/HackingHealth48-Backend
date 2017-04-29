var Post = require('../models/Post');

//get all posts
exports.getPosts = function (req, res) {
    Post.find(function (err, posts) {
        if (err)
            return res.send(err);

        res.json(posts);
    });
};

//make a new post
exports.newPost = function (req, res) {
    var post = new Post();
    
    post.title = req.body.title;
    post.category = req.body.category; 
    post.creadedAt = req.body.createdAt;
    post.photo = req.body.photo;
    post.comments = req.body.comments;
    post.upvotes = req.body.upvotes;
    post.description = req.body.description;
    

    post.save(function (err) {
        if (err)
            return res.send(err);

        res.json({ message: 'Post created!' });
    });

};

//get specific post by id
exports.getPostByID =  function(req, res) {
    Post.find({_id: req.params.id}, function(err, post) {
        if (err)
            return res.send(err);
        res.json(post);
    });
};

//remove a post by id
exports.removePost = function (req, res) {
    Post.remove({
        _id: req.params.id
    }, function (err, post) {
        if (err)
            return res.send(err);

        res.json({ message: 'Post deleted' });
    });
};

//upvote a post
exports.upvote = function (req, res) {
    
    var upvotes = {upvotes: Number(req.body.upvotes) + 1};

    Post.findByIdAndUpdate(req.params.id, upvotes, (err, post) => {
    if (err) {
      return res.send(err);
    }
    res.json({ message: 'Updated user successfully'});
    
});
};

