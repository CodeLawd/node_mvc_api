const express = require("express");
const mongoose = require("mongoose");
require("./model/dbConfig");

const app = express();


app.use(express.urlencoded({ extended: false }));

// ----------- CONFIGURING ROUTES -------
app.use("/users", require("./routes/users"));
app.use("/admin", require("./routes/admin"));

// ----------- EJS SETUP ----------------
app.set("view engine", "ejs");

app.listen(3000, console.log("Server started at port 3000"));
