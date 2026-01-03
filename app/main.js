// //https://nodejs.org/api/readline.html
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("$ ");
rl.prompt();

rl.on("line", async (c) => {
  // This event fires every time the user presses Enter after typing something.
  if (c === "exit") return rl.close();
  if (c.includes("echo")) {
    const a = c.slice(5);
    console.log(a)
  }else{
  console.log(`${c}: command not found`);
    }
  rl.prompt();
});
