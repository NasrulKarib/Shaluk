const authrouter = require("express").Router();
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { registerUser, loginUser } = require("../../controllers/auth_controllers/authcontroller");
  
authrouter.use(passport.initialize());
// register route
authrouter.post("/register",registerUser);

// login route
authrouter.post("/login",loginUser);

module.exports = authrouter;