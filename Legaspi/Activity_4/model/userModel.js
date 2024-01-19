const dbConn = require("../configs/db.Configs");

const UserModel = {};

UserModel.getName = (callback) => {
  dbConn.query("SELECT * FROM name_tb", (error, result) => {
    if (error) {
      console.error("Error retrieving grade 12 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};


UserModel.postUserData = (userData,callback) => {
    const {name,age, address,phone}= userData;
    dbConn.query("Insert INTO name_tb(name,age)VALUES (?,?)", 
    {name,age},
    (error, result) => {
      if (error) {
        console.error("Error inserting data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };
  module.exports = UserModel;