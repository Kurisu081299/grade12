const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getTry2 = (callback) => {
    dbConn.query("SELECT * FROM name", (error, result) => {
      if (error) {
        console.error("Error retrieving grade 11 data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

  UserModel.insertTry2 = (data, callback) => {
    dbConn.query("INSERT INTO name (name, age) VALUES (?, ?)", [data.name, data.age], (error, result) => {
      if (error) {
        console.error("Error inserting name data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };
  
module.exports = UserModel;