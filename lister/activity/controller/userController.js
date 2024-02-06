const userModel = require('../models/userModel');

const userController = {};

userController.loginUserData = (req, res) => {
  const { username, password } = req.body;

  // Check if required fields are provided
  if (!username || !password) {
    return res.status(400).json({ message: "Please provide username & password" });
  }

  // Call the model to check if username and password match
  userModel.checkUserCredentials(username, password, (error, result) => {
    if (error) {
      console.error("Error checking user credentials: ", error);
      return res.status(500).json({ message: "Error checking user credentials" });
    }

    if (!result) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    return res.status(200).json({ message: "Login successful" });
  });
};

module.exports = userController;