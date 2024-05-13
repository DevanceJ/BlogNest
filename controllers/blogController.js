const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

//@desc Get all blogs
//@route GET /api/blogs
//@access private
const getBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({ user_id: req.user.id });
    res.status(200).json(blogs);
})

//@desc Create a blog
//@route POST /api/blogs
//@access private
const createBlog = asyncHandler(async (req, res) => {
    const { title, tags, body } = req.body;
    if (!title || !tags || !body) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }
    const blog = await Blog.create({
        title,
        tags,
        body,
        user_id: req.user.id
    })
    res.status(201).json(blog);
});

//@desc Get a blog
//@route GET /api/blogs/:id
//@access private
const getBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
        res.status(404);
        throw new Error("Blog not found");
    }
    res.status(200).json(blog);
});

//@desc Update a blog
//@route PUT /api/blogs/:id
//@access private
const updateBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
        res.status(404);
        throw new Error("Blog not found");
    }
    if (blog.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("Not authorized to update this blog");
    }
    const updateBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(201).json(updateBlog);
});

//@desc Delete a blog
//@route DELETE /api/blogs/:id
//@access private
const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
        res.status(404);
        throw new Error("Blog not found");
    }
    if (blog.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("Not authorized to update this blog");
    }
    await Blog.deleteOne({ _id: req.params.id });
    res.status(200).json(blog);
});

module.exports = {
    getBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
};