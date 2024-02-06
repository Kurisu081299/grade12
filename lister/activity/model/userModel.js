const dbConn = require('../config/db');

const userModel = {};

userModel.checkUserCredentials = (username, password, callback) => {
  dbConn.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (error, result) => {
    if (error) {
      console.error("Error checking user credentials: ", error);
      return callback(error, null);
    }

    if (result.length === 0) {
      return callback(null, false); // No matching user found
    }

    return callback(null, true); // Username and password match
  });
};

module.exports = userModel;