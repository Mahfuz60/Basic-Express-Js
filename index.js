//Response object example
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/test", (req, res) => {
  res.send("hello world");
});

//route routers
app.get("/about", (req, res) => {
  /*console.log(res.headersSent);
  res.render("aboutPage/about", {
    name: "Bangladesh ",
  });
  console.log(res.headersSent);
  */
  //res.send("About pages");
  //res.json({
  // name: "Bangladesh",});
  //res.sendStatus(403);
  /*res.format({
    "text/plain": () => {
      res.send("hello Programmer");
    },
    "text/html": () => {
      res.render("/aboutPage/about", {
        name: "Bangladesh",
      });
    },
    "application/json": () => {
      res.json({
        message: "Bangladesh is a beautiful Country",
      });
    },
    default: () => {
      res.status(406).send("Not acceptable");
    },
  });
  */
  /*res.cookie("name", "Digital Bangladesh", {
    path: "/about",
    secure: true,
  });
  */
  //res.redirect("/test");
  res.set("Title", "Web Developer");
  console.log(res.get("Title"));
  res.end();
});

app.listen(3000, () => {
  console.log("listening on this port:3000");
});
