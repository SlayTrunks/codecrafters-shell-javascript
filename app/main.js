// //https://nodejs.org/api/readline.html
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// TODO: Uncomment the code below to pass the first stage
function main(){
    return rl.question("$ ", (command) => {
    console.log(`${command}: command not found`)
    main()
  // rl.close();
});
}

main()
