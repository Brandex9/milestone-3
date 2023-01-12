module.exports = (app) => {
  app.use("/login", require("./login"));
  app.use("/pictures", require("./pictures"));
};
