const express = require("express");
const app = express();

// app.use(express.json());
//app.use(express.raw());
//app.use(express.text());
//app.use(express.urlencoded());
//app.use(express.static(`${__dirname}/public/`));
const router = express.Router({
  caseSensitive: true,
});
app.use(router);

router.get("/about", (req, res) => {
  res.send("Hello World");
});

app.get("/", (req, res) => {
  res.send("This is homepage with get request");
});
app.post("/", (req, res) => {
  // console.log(typeof req.body);
  // console.log(req.body.name);
  //console.log(req.body.toString());
  console.log(req.body);

  res.send("This is homepage with post request ");
});

app.listen(3000, () => {
  console.log("listening on this port:3000");
});
