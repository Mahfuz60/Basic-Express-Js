//Express js Error Handler
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(a);
});
//404 error handler
app.use("/", (req, res) => {
  res.status(404).send("Request URl was not found!");
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    next("There was a Problem!");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("there was an error");
    }
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
