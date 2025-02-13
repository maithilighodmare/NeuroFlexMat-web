const express = require('express');
let routes = express.Router();
let { userSignUp, userLogin } = require('../Controllers/userControllers');

routes.get('/signup', userSignUp);
routes.get('/login', userLogin);

module.exports = { routes };