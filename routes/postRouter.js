import express from 'express';
import {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
} from './../controllers/postController.js';
const router = express.Router();

//create post
router.post('/post', createPost)

//read posts
router.get('/posts', getPosts)

//detail post
router.get('/post/:id', getPostById)

//update post
router.put('/post/:id', updatePost)

//delete post
router.delete('/post/:id', deletePost)

export default router;