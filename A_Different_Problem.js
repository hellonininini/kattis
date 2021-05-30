const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

read.on("line", line => {
  const [a, b] = line.split(" ");
  console.log(Math.abs(a - b));
});
