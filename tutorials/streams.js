const fs = require("fs");

// read stream
const readStream = fs.createReadStream("../docs/blog3.txt", {
  encoding: "utf8",
  highWaterMark: 64,
});

// write stream
const writeStream = fs.createWriteStream("../docs/blog4.txt");

readStream.on("data", (chunk) => {
  // read the chunks
  console.log(chunk.length + "------------ NEW CHUNK --------------");
  console.log(chunk);

  // write to new file
  writeStream.write("------------ NEW CHUNK --------------\n");
  writeStream.write(chunk + "\n");
});

// piping - same as above but direct
//readStream.pipe(writeStream);
