const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getAct = (callback) => {
  dbConn.query("SELECT * FROM users", (error, result) => {
    if (error) {
      console.error("Error retrieving users data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.insertAct = (data, callback) => {
  dbConn.query("INSERT INTO users (username, password) VALUES (?, ?)", [data.username, data.password], (error, result) => {
    if (error) {
      console.error("Error inserting users data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

module.exports = UserModel;
