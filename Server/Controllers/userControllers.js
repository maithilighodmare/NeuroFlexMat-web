const { User } = require('../Schema/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// User Signup
const userSignUp = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        

        // Check if all required fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required (name, email, password)" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        let dataArr = [10, 20, 30, 40, 50, 60, 70];
        const newUser = new User({ name, email, password: hashedPassword, age,dataArr });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error in signup", error: error.message });
    }
};

// User Login
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login Attempt: ", email);

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User found:", user);

        // Check if user has a password field
        if (!user.password) {
            console.log("Error: User password is missing!");
            return res.status(500).json({ message: "Error: Password not found for this user" });
        }

        console.log("Stored Hashed Password:", user.password);
        console.log("Provided Password:", password);

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Password does not match");
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log("Password matched, generating token...");

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });

        console.log("Login successful, sending response...");
        res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ message: "Error in login", error: error.message });
    }
};


const authMiddleware = require('../middleware/authMiddleware');

// Get User Profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user profile", error: error.message });
    }
};

// Update User
const updateUser = async (req, res) => {
    try {
        const { name, age } = req.body;

        // Validate request body
        if (!name && !age) {
            return res.status(400).json({ message: "At least one field (name or age) is required" });
        }

        // Find user and update only provided fields
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            { $set: { ...(name && { name }), ...(age && { age }) } }, // Only update if provided
            { new: true, runValidators: true }
        ).select("-password"); // Exclude password from response

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });

    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        // Find user before deletion
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Delete user
        await User.findByIdAndDelete(req.user.id);

        res.status(200).json({ message: "User deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
};


const userList = async (req, res) => {
    try {
        // Fetch all users, excluding passwords
        const users = await User.find().select("-password");

        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json({ message: "Users fetched successfully", users });

    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

const getDataArr = async (req, res) => {
    try {
        const { email } = req.body; // Get email from request body

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const user = await User.findOne({ email }).select("dataArr");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Data fetched successfully", dataArr: user.dataArr });

    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error: error.message });
    }
};

const addInArr = async (req, res) => {
    try {
        const { email, value } = req.body; // Get email and value from request body

        if (!email || value === undefined) {
            return res.status(400).json({ message: "Email and value are required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Add the new value to the array
        user.dataArr.push(value);
        await user.save();

        res.status(200).json({ message: "Value added successfully", dataArr: user.dataArr });

    } catch (error) {
        res.status(500).json({ message: "Error adding value", error: error.message });
    }
};



module.exports = { userSignUp, userLogin, getUserProfile, updateUser, deleteUser, userList,getDataArr ,addInArr};


