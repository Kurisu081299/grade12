const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getPracticeData = (callback) => {
  dbConn.query("SELECT * FROM practice", (error, result) => {
    if (error) {
      console.error("Error retrieving practice data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.postUserData = (userData, callback) => {
    const {id,name,school,gender} = userData;

    dbConn.query("INSERT INTO practice (id,name,school,gender) VALUES (?, ?, ?, ?)",
    [id,name,school,gender],
    (error, result) => {
        if (error) {
            console.error("Error inserting user data:", error);
            return callback(error, null);
        }
        return callback(null,result);
    });
}
module.exports = UserModel;