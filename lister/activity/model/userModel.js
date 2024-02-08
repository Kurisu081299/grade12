const dbConn = require("../config/db.config");

const Model = {};

Model.checkLoginCredentials = (username, password, callback) => {
    dbConn.query("SELECT * FROM activity WHERE username = ? AND password = ?", [username, password], (error, result) => {
      if (error) {
        console.error("Error checking login credentials: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

  Model.insertUserData = (data, callback) => {
    dbConn.query("INSERT INTO activity (username, password) VALUES (?, ?)", [data.username, data.password], (error, result) => {
      if (error) {
        console.error("Error signing up: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };
  





module.exports = Model;
