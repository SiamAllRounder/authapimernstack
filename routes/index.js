const express = require("express");
const { registerUser, loginUser } = require("../userController");
const { userRegisterValidate } = require("../utils/userValidation");
const routes = express.Router();

routes.post("/register", userRegisterValidate, registerUser);

routes.post("/login", loginUser);

module.exports = routes;
