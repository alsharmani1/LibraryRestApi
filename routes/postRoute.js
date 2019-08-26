const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const path = require('path');

//front page 

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});
// Get All posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json(err)
    }
});

//Sumbit Posts
router.post('/posts', async (req, res) => {
    // Insert data to database
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    //Save Data
    const savedPost = await post.save();
    try {
        res.json(savedPost);
    } catch(err) {
        res.json(err)
    }
});

// Get specfic post using ID
router.get('/posts/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post)
    }catch(err){
        res.json(err)
    }
});

// Delete a post using ID
router.delete('/posts/:postId', async (req, res) => {
    try {
        const removed = await Post.remove({ _id: req.params.postId });
        res.json(removed);
    } catch(err) {
        res.json(err)
    }
});

//Update data
router.patch('/posts/:postId', async (req, res) => {
    try {
        const updated = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { title: req.body.title } }
            );
            res.json(updated);
    } catch (err) {
        res.json(err)
    }
})
module.exports = router;