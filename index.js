const express = require("express");
//const handle = require("./handle");

const app = express(); //main path app

//const admin = express();

/*app.locals.title = "My App";
app.locals.email = "mahfuz@gmail.com";
*/

//express() example

/*
app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded());
app.use(express.static(`${__dirname}/public/`));
const router = express.Router({
  caseSensitive: true,
});
*/

//router example

/* app.use(router);

 router.get("/about", (req, res) => {

   res.send("Hello Programmer");
 });
 */

//app.get("/", handle);

//sub path app admin example
/*
app.use("/admin", admin); //sub app path
admin.get("/dashboard", (req, res) => {
  res.send("welcome to the admin dashboard");
  console.log(admin.mountpath);
});
*/

app.post("/", (req, res) => {
  // console.log(typeof req.body);
  // console.log(req.body.name);
  //console.log(req.body.toString());
  console.log(req.body);

  res.send("This is homepage with post request ");
});
//app.params example
/*
app.param("id", (req, res, next, id) => {
  const user = {
    userId: id,
    country: "Bangladesh",
    capital: "Dhaka city",
  };
  req.userDetails = user;
  next();
});

app.get("/user/:id", (req, res) => {
  res.send("This is get request homepage 2");
  console.log(req.userDetails);
});
*/

//app.router example

/*app
  .route("/about/mission")
  .get((req, res) => {
    res.send("This is homepage get request");
  })
  .post((req, res) => {
    res.send("This is homepage post request");
  })
  .put((req, res) => {
    res.send("This is homepage put request");
  });
  */
//app.engine example
/*app.set("view engine", "ejs");
app.route("/about/mission").get((req, res) => {
  res.render("/pages/about");
});
*/

//Request object example


app.listen(3000, () => {
  console.log("listening on this port:3000");
});
