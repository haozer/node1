const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
app.set("views", "ejs");

// listen for requests
const server = app.listen(3000);

// Home
app.get("/", (req, res) => {
  res.send("Home");
});

// About
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// Test
app.get("/test", (req, res) => {
  res.sendFile("./views/test.html", { root: __dirname });
});

// Redirects
app.get("/about-us", (req, res) => {
  res.redirect(302, "/about");
});

// 404 (catch all)
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
