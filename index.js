//Middleware example
const express = require("express");
const app = express();
const adminRouter = express.Router();
//create middleware
const logger = (req, res, next) => {
  console.log(
    `${new Date(Date.now()).toLocaleString()}-${req.method}-${
      req.originalUrl
    }-${req.protocol}-${req.ip}`
  );
  //next();
  throw new Error("This is an Error");
};
adminRouter.use(logger);
adminRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard Pages");
});
//errorHandling middleware
const errorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("There was a server site error");
};
adminRouter.use(errorMiddleware);

app.use("/admin", adminRouter);
//route routers
app.get("/about", (req, res) => {
  res.send("Hello Programmer");
});

app.listen(3000, () => {
  console.log("listening on this port:3000");
});
