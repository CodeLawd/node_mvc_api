const express = require("express");
const mongoose = require("mongoose");

// ----------- CALLING THE DATABASE INSIDE APP.JS -------
require("./model/dbConfig");

const app = express();

app.use(express.urlencoded({ extended: false }));

// ----------- CONFIGURING ROUTES -------
app.use("/users", require("./routes/users"));
app.use("/admin", require("./routes/admin"));
app.use("/", require("./routes/main"));

// ----------- EJS SETUP ----------------
app.set("view engine", "ejs");

app.listen(3000, console.log("Server started at port 3000"));
