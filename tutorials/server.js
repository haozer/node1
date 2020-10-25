const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 20);
  const greet = _.once(() => {
    console.log("hello " + num);
  });

  greet();
  greet();
  greet();
  greet();
  greet();

  // set the header (single entry)
  res.setHeader("Content-Type", "text/html");

  let path = "";

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.write("<h1>Home2</h1>\n");
      res.write("<h3>Request made!</h3>\n");
      res.write(`<p>url: ${req.url}</p>\n`);
      res.write(`<p>method: ${req.method}</p>\n`);
      res.end();
      break;
    case "/about":
      path = "../views/about.html";
      res.statusCode = 200;
      break;
    case "/about-old":
      res.statusCode = 302;
      res.setHeader("Location", "/about");
      res.end();
      break;
    case "/test":
      path = "../views/test.html";
      res.statusCode = 200;
      break;
    default:
      path = "../views/404.html";
      res.statusCode = 404;
      break;
  }

  if (path !== "") {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data.toString());
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
