const express = require("express");
const routes = express.Router();

routes.post("/register", (req, res) => {
  res.send("ALHAAMDULILLAH success");
});

routes.post("/login", (req, res) => {
  res.send("ALHAAMDULILLAH login success");
});

module.exports = routes;
