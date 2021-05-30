const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

read.on("line", count => {
  for (let i = 1; i <= count; i++) {
    console.log(`${i} Abracadabra`);
  }
});
