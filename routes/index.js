const express = require("express");
const { registerUser, loginUser } = require("../userController");
const { userRegisterValidate, userLoginValidate } = require("../utils/userValidation");
const routes = express.Router();

routes.post("/register", userRegisterValidate, registerUser);

routes.post("/login", userLoginValidate, loginUser);

module.exports = routes;
