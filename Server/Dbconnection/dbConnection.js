require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');
const url="mongodb://localhost:27017/neuroflex";

const dbConnection = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.log("Database connection error:", error.message);
    }
}

module.exports = dbConnection;
