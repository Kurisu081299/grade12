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

UserModel.postUserData = (userData, callback) => {
    const {name,age,address,phone} = userData;

    dbConn.query("INSERT INTO garde12_db (name,age,address,phone) VALUES (?, ?, ?, ?)",
    [name,age,address,phone],
    (error, result) => {
        if (error) {
            console.error("Error inserting user data:", error);
            return callback(error, null);
        }
        return callback(null,result);
    });
}
module.exports = UserModel;