module.exports = {
  home: (req, res) => {
    res.render("home");
  },

  error: (req, res) => {
    res.render("error");
  },
};
