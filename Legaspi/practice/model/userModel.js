const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getGrade11Data = (callback) => {
  dbConn.query("SELECT * FROM base_tb", (error, result) => {
    if (error) {
      console.error("Error retrieving grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.getBase = (callback) => {
    dbConn.query("SELECT * FROM base_tb", (error, result) => {
      if (error) {
        console.error("Error retrieving base data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

  UserModel.insertBase = (data, callback) => {
    dbConn.query("INSERT INTO base_tb (name, age) VALUES (?, ?)", [data.name, data.age], (error, result) => {
      if (error) {
        console.error("Error inserting base data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

  UserModel.updateBase = (id, data, callback) => {
    dbConn.query(
      "UPDATE base_tb SET name=?, age=? WHERE id=?",
      [data.name, data.age, id],
      (error, result) => {
        if (error) {
          console.error("Error updating base data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };
  
  UserModel.deleteBase = (idsToDelete, callback) => {
    const query = "DELETE FROM base_tb WHERE id = ?";
  
    dbConn.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting base data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };
  
module.exports = UserModel;