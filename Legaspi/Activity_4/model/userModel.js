const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getGrade11Data = (callback) => {
  dbConn.query("SELECT * FROM grade11_tb", (error, result) => {
    if (error) {
      console.error("Error retrieving grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

module.exports = UserModel;
