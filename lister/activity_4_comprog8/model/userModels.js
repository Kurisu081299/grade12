const dbConn = require("../config/db.configs");

const UserModel = {};

UserModel.getGrade12Data = (callback) => {
  dbConn.query("SELECT * FROM grade12_db", (error, result) => {
    if (error) {
      console.error("Error retrieving grade 12 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

module.exports = UserModel;