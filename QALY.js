const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 1;
let total = 0;
let tmp = 0;
read.on("line", line => {
  if (count == 1) {
    total = line;
  } else {
    const [a, b] = line.split(" ");
    tmp += a * b;
  }
  if (count - 1 == total) {
    console.log(tmp.toFixed(3));
  }
  count++;
});
