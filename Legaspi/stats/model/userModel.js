const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getGrade11Data = (callback) => {
  dbConn.query("SELECT * FROM name_tb", (error, result) => {
    if (error) {
      console.error("Error retrieving grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.getStats = (callback) => {
    dbConn.query("SELECT * FROM stats_tb", (error, result) => {
      if (error) {
        console.error("Error retrieving grade 11 data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

  UserModel.insertStats2 = (data, callback) => {
    dbConn.query("INSERT INTO stats_tb (name, age) VALUES (?, ?)", [data.name, data.age], (error, result) => {
      if (error) {
        console.error("Error inserting name data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };

  UserModel.updateStats2 = (id, data, callback) => {
    dbConn.query(
      "UPDATE stats_tb SET name=?, age=? WHERE id=?",
      [data.name, data.age, id],
      (error, result) => {
        if (error) {
          console.error("Error updating grade 11 data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };
  
module.exports = UserModel;