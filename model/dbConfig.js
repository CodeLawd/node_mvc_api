const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Failed to connect to DB"));
