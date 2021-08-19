const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("This is homepage with get request");
});
app.post("/", (req, res) => {
  console.log(typeof req.body);
  console.log(req.body.name);

  res.send("This is homepage with post request ");
});

app.listen(3000, () => {
  console.log("listening on the port:3000");
});
