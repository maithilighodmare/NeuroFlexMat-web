const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    }
})


const User = mongoose.model('user', userSchema);
module.exports = { User };