// //https://nodejs.org/api/readline.html
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("$ ")
rl.prompt()

rl.on("line", async(line)=>{ // This event fires every time the user presses Enter after typing something.
    if(line=="exit"){
       return rl.close()
    }
    console.log(`${line}: Command not found`)
    
    rl.prompt()
})
