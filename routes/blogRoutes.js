const express = require('express');
const router = express.Router();
const { getBlogs, createBlog, getBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.route("/").get(getBlogs).post(createBlog);
router.route("/:id").get(getBlog).delete(deleteBlog).put(updateBlog);


module.exports = router;