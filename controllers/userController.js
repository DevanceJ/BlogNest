const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//@desc Register a User
//@route POST users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }
    // hashed pass
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = await User.create({ username, email, password: hashedPassword });
    if (user) {
        res.status(201).json({ _id: user.id, username: user.username, email: user.email })
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
})

//@desc Login a User
//@route POST users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({ id: user._id, email: user.email, username: user.username }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_LIFE }
        );
        res.json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Invalid credentials");
    }
})

//@desc Get current user
//@route GET users/current
//@access Private
const getCurrentUser = asyncHandler(async (req, res) => {
    res.json(
        req.user
    )
})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findOneAndDelete({ email: req.body.email });
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    res.status(200).json({ message: "User deleted" });
})
module.exports = { registerUser, loginUser, getCurrentUser, deleteUser };