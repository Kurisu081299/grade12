const dbConn = require("../configs/db.Configs");

const UserModel = {};

UserModel.getGrade12Data = (callback) => {
  dbConn.query("SELECT * FROM grade12_tb", (error, result) => {
    if (error) {
      console.error("Error retrieving grade 12 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};


UserModel.postUserData = (userData,callback) => {
    const {name,age, address,phone}= userData;
    dbConn.query("Insert INTO grade12_tb(name,age,address,phone)VALUES (?,?,?,?)", 
    {name,age,address,phone},
    (error, result) => {
      if (error) {
        console.error("Error inserting data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };
  module.exports = UserModel;