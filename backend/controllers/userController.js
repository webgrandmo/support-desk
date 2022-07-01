const asyncHandler = require("express-async-handler");

// @desc Register a new user
// @route POST /api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validate all the fields
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  res.send("Register Route");
});

// @desc Login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route");
});

module.exports = {
  registerUser,
  loginUser,
};
