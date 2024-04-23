import Post from '../models/PostModels.js';

const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);

        res.status(201).json({
            status: 'success',
            message: 'Post created successfully',
            post
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            status: 'success',
            message: 'Posts read successfully',
            posts
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            message: 'Post read successfully',
            post
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params
            .id, req.body, {
                new: true,
                runValidators: true
            });

        res.status(200).json({
            status: 'success',
            message: 'Post updated successfully',
            post
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            message: 'Post deleted successfully',
            post
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

export {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
}