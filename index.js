//Express js File UPload handler
const express = require("express");
const multer = require("multer");

//preparing upload folder
const UPLOADS_FOLDER = ("/uploads");
var upload = multer({
  dest: UPLOADS_FOLDER,
});

const app = express();

app.post("/", upload.single("avatar"), (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
