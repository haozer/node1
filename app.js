const express = require("express");
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
app.set("views", "ejs");

// listen for requests
const server = app.listen(3000);

// use next to gracefully move onto next set of middleware
app.use(morgan('dev'));

// Home
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "What does “professional resume writer” mean?",
    },
    {
      title: "Mario finds stars",
      snippet: "Do you guarantee your work?",
    },
    {
      title: "Luigi stumbles onto secret",
      snippet: " Is every resume truly customized?",
    },
    {
      title: "How to defeat bowser",
      snippet: "What is the benefit of having a professionally-written resume?",
    },
  ];
  res.render("index", {
    title: "Home",
    name: "Dynamic data name",
    blogs,
  });
});

// About
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Test
app.get("/test", (req, res) => {
  res.render("test", { title: "Test" });
});

// Blogs
app.get("/blogs", (req, res) => {
  res.render("blogs", { title: "Blogs" });
});

// Blogs - Create
app.get("/blogs/create", (req, res) => {
  res.render("blogs_create", { title: "Blogs - Create" });
});

// Redirects
app.get("/about-us", (req, res) => {
  res.redirect(302, "/about");
});

// 404 (catch all)
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
