const dbConn = require("../config/config");

const Model = {};

Model.checkLoginCredentials = (username, password, callback) => {
    dbConn.query("SELECT * FROM tb_name WHERE username = ? AND password = ?", [username, password], (error, result) => {
      if (error) {
        console.error("Error checking login credentials: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

  Model.insertUserData = (data, callback) => {
    dbConn.query("INSERT INTO tb_name (username, password) VALUES (?, ?)", [data.username, data.password], (error, result) => {
      if (error) {
        console.error("Error signing up: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };
  





module.exports = Model;
