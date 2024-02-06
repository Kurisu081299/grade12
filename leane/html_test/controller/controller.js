const model = require('../model/model');

const controller = {};

controller.posthtml_db = (req, res) => {
    const { username, password } = req.body;

    // Check if required fields are provided
    if (!username || !password) {
        return res.status(400).json({ message: "Please provide username & password" });
    }

    // Call the model to check login credentials
    model.checkLoginCredentials(username, password, (error, result) => {
        if (error) {
            console.error("Error checking login credentials: ", error);
            return res.status(500).json({ message: "Error checking login credentials" });
        }

        if (result.length === 0) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // If login is successful, include the username in the response
        const successfulResponse = {
            message: "Login successful",
            username: result[0].username // Assuming the username is in the first result row
        };

        return res.status(200).json(successfulResponse);
    });
};
controller.signup = (req, res) => {
    const { username, password } = req.body;
  
    // Check if required fields are provided
    if (!username || !password) {
      return res.status(400).json({ message: "Please provide username & password" });
    }
  
    // Call the model to insert user data
    model.insertUserData({ username, password }, (error, result) => {
      if (error) {
        console.error("Error inserting User data: ", error);
        return res.status(500).json({ message: "Error inserting User data" });
      }
  
      return res.status(200).json({ message: "User registered successfully" });
    });
  };
module.exports = controller;
