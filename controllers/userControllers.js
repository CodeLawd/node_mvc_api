const { application } = require("express");
const mongoose = require("mongoose");
const User = require("../model/dbSchema");

module.exports = {
  get: (req, res) => {
    res.render("users/index");
  },

  post: (req, res) => {
    const { fullName, email, phoneNumber } = req.body;
    // console.log(fullName, email, phoneNumber);
    User.findOne({ email: email }, (err, user) => {
      console.log(user);
      if (err) {
        console.log(err);
      } else if (!user) {
        const newUser = new User({
          fullName,
          email,
          phoneNumber,
        });
        newUser.save((err) => {
          if (err) {
            console.log("Something Went Wrong");
          } else {
            console.log("User Created Successfully");
            res.redirect("/users/user");
          }
        });
      } else {
        console.log("User Exists");
        res.redirect("/users/login");
      }
    });
  },

  profile: (req, res) => {
    res.render("users/profile");
  },

  login_get: (req, res) => {
    res.render("users/login");
  },

  login_post: (req, res) => {
    const { email, phoneNumber } = req.body;
    User.findOne({ email: email }, (err, data) => {
      if (err) {
        console.log(err);
      } else if (data) {
        if (data.email == email && data.phoneNumber == phoneNumber) {
          console.log("Login Success");
          res.render("users/dashboard", { user: data });
        } else {
          console.log("Incorrect Credentials");
        }
      } else {
        console.log("No user found");
        res.redirect("/users");
      }
    });
  },

  dashboard: (req, res) => {
    // console.log(res);
    res.render("users/dashboard");
    console.log(req.user);
  },
};

// application.get("/login/:id" )
