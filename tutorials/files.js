// useful for getting os info such as platform, homedir
const os = require("os");
console.log(os.platform());
console.log(os.homedir());

// global directory name
console.log(__dirname);

// global filename
console.log(__filename);

// files
const fs = require("fs");

// reading files
fs.readFile("../docs/blog.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// writing files
fs.writeFile("../docs/blog2.txt", "Hello Worlds!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written");
  }
});

// deleting files, check if file exists
if (fs.existsSync("../docs/deleteme.txt")) {
  // creates folder
  fs.unlink((file = "../docs/deleteme.txt"), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${file} deleted`);
    }
  });
} else {
  console.log("Can't find deleteme.txt file");
}

// directories, check if folder exists
if (!fs.existsSync("./test")) {
  // creates folder
  fs.mkdir((dir = "./test"), (err) => {
    if (err) {
      // err may be folder exists already
      console.log(err);
    } else {
      console.log(`${dir} created`);
    }
  });
} else {
  console.log("Directory already exists");

  // removes folder
  fs.rmdir((dir = "./test"), (err) => {
    // err may be folder exists already
    if (err) {
      console.log(err);
    } else {
      console.log(`${dir} removed`);
    }
  });
}
