const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getUserData = (username, callback) => {
  let query = "SELECT * FROM users";
  let queryParams = [];

  // If username is provided, filter by username
  if (username) {
    query += " WHERE username = ?";
    queryParams.push(username);
  }

  dbConn.query(query, queryParams, (error, result) => {
    if (error) {
      console.error("Error retrieving user data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};
UserModel.insertUserData = (data, callback) => {
  dbConn.query("INSERT INTO users (username, password) VALUES (?, ?)", [data.username, data.password], (error, result) => {
    if (error) {
      console.error("Error signing up: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.checkUserCredentials = (username, password, callback) => {
  dbConn.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (error, result) => {
    if (error) {
      console.error("Error checking user credentials: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

// UserModel.updateGrade11Data = (id, data, callback) => {
//   dbConn.query(
//     "UPDATE grade11_tb SET name=?, age=?, address=? WHERE id=?",
//     [data.name, data.age, data.address, id],
//     (error, result) => {
//       if (error) {
//         console.error("Error updating grade 11 data: ", error);
//         return callback(error, null);
//       }

//       return callback(null, result);
//     }
//   );
// };

// UserModel.deleteGrade11Data = (idsToDelete, callback) => {
//   const query = "DELETE FROM grade11_tb WHERE id = ?";

//   dbConn.query(query, [idsToDelete], (error, result) => {
//     if (error) {
//       console.error("Error deleting grade 11 data: ", error);
//       return callback(error, null);
//     }

//     return callback(null, result);
//   });
// };


module.exports = UserModel;
