const express = require("express");
const adminRouter = express.Router();
adminRouter.get("/", (req, res) => {
  res.send("dashBroad here");
});
adminRouter.get("/login", (req, res) => {
  res.send("Login Pages are here");
});

module.exports = adminRouter;
