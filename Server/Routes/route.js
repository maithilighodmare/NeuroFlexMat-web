const express = require('express');
const routes = express.Router();  // Change 'let' to 'const' and ensure consistent naming

const { userSignUp, userLogin, getUserProfile, updateUser, deleteUser, userList, getDataArr, addInArr } = require('../Controllers/userControllers');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure you have this middleware

routes.post('/signup', userSignUp);
routes.post('/login', userLogin);
routes.get('/profile', authMiddleware, getUserProfile);
routes.get("/doctor-dashboard");
routes.put('/update', authMiddleware, updateUser);
routes.delete('/delete', authMiddleware, deleteUser);
routes.get('/userlist', userList);
routes.get('/dataarr', getDataArr, authMiddleware);
routes.post('/addvalue', authMiddleware, addInArr);

module.exports = routes;  // Export routes correctly
