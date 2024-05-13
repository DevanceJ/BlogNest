const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please provide a user id"],
        ref: 'User',
    },
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    tags: {
        type: String,
        required: [true, "Please provide tags"],
    },
    body: {
        type: String,
        required: [true, "Please provide a body"],
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Blog', blogSchema);