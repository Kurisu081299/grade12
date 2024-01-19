const dbConn = require("../config/db.config");

const modelss = {};

modelss.getpractice = (callback) => {
  dbConn.query("SELECT * FROM table1", (error, result) => {
    if (error) {
      console.error("Error retrieving practice: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};
module.exports=modelss;