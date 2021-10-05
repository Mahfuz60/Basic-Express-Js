const express = require("express");
const publicRouter = express.Router();

//customization router(Router.Param())
publicRouter.param((param, option) => (req, res, next, val) => {
  if (val === option) {
    next();
  } else {
    res.sendStatus(403);
  }
});
publicRouter.param("user", "10");


//Router.all()
/*
const log = (req, res, next) => {
  console.log("I am logging Something...");
  next();
};
publicRouter.all("*", log);
*/
publicRouter.get("/:user", (req, res) => {
  res.send("Hello Admin!");
});

publicRouter.get("/", (req, res) => {
  res.send("Home Page");
});
publicRouter.get("/about", (req, res) => {
  res.send("About Pages");
});

module.exports = publicRouter;
