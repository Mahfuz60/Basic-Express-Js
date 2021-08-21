const handle = (req, res) => {
  console.log(req.app.locals.title);
  console.log(req.app.locals.email);
  res.send("This is homepage with get request");
};
module.exports = handle;
