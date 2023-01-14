module.exports = (app) => {
  app.use("/login", require("./login"));
  app.use("/signup", require("./signup"));
};
