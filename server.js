const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})