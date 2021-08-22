//Request object example
const express = require("express");

const adminRoute = express.Router();
const app = express();
app.use(express.json());

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.hostname);
  res.send("we are in adminRoute dashboard");
});
app.use("/admin", adminRoute);
app.post("/user/", (req, res) => {
  //console.log(req.body);
  res.send("Hello World! post request");
});

//route routers
app.get("/user/:id", (req, res) => {
  //console.log(req.cookies);
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("listening on this port:3000");
});
