const registerController = (req, res) => {
  res.send("Register Route");
};

const loginController = (req, res) => {
  res.send("Login Route");
};

module.exports = {
  registerController,
  loginController,
};
