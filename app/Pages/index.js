const express = require("express");
const Router = express.Router();
const path = require("path");

Router.get("/", (req, resp) => {
  const app = path.join(__dirname, "Home.html");
  return resp.sendFile(app);
});

Router.get("/login", (req, resp) => {
  const app = path.join(__dirname, "App.html");
  return resp.sendFile(app);
});

Router.get("/app", (req, resp) => {
  const app = path.join(__dirname, "App.html");
  return resp.sendFile(app);
});

module.exports = Router;
