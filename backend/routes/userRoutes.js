const express = require("express");
const route = express.Router();
const {
  registerController,
  loginController,
} = require("../controllers/userController");

route.post("/", registerController);

route.post("/login", loginController);

module.exports = route;
