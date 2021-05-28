const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
read.on("line", line => {
  const [R1, S] = line.split(" ");
  console.log(2 * S - R1);
});
