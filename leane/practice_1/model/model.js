const connection = require("../configs/configs");

const model = {};

model.getpractice_1 = (callback) => {
  connection.query("SELECT * FROM untitled_table_1", (error, result) => {
    if (error) {
      console.error("Error retrieving untitle_table_1: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

module.exports = model;
