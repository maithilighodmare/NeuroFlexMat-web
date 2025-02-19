require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.log("Database connection error:", error.message);
    }
}

module.exports = dbConnection;
