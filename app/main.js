// //https://nodejs.org/api/readline.html
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("$ ");
rl.prompt();

const builtIn = ["exit", "type", "echo"];
rl.on("line", async (c) => {
  // This event fires every time the user presses Enter after typing something.
  if (c === "exit") return rl.close();
  else if (c.substring(0, 4) == "echo") {
    const a = c.slice(5);
    console.log(a);
  } else if (c.substring(0, 4) == "type") {
    const a = c.substring(5); //same as slice from 5th to last letter of toString()
    if (builtIn.includes(a)) {
      console.log(`${a} is a shell builtin`);
    } else {
      console.log(`${a}: not found`);
    }
  } else {
    console.log(`${c}: command not found`);
  }
  rl.prompt();
});
