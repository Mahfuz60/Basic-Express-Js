//Express js File UPload handler
const express = require("express");
const multer = require("multer");

//preparing upload folder
const UPLOADS_FOLDER = "./uploads/";
var upload = multer({
  dest: UPLOADS_FOLDER,
  limits: {
    fileSize: 1000000, //1MB
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image.jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("only jpg,png and jpeg file are allowed!"));
    }
  },
});

const app = express();
//single file upload
app.post("/", upload.single("avatar"), (req, res) => {
  res.send("File uploaded successfully done!");
});
//multiple file upload
// app.post("/", upload.array("avatar", 5), (req, res) => {
//   res.send("File uploaded successfully done!");
// });

//default error handlers
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("there was a upload error!");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("successfully uploaded");
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
