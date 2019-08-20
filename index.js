let inquirer = require('inquirer');

console.log("\n\nWELCOME TO HANGMAN: IN NODE.JS");
console.log("Guess the old time sayings...\n\n")

//ask();
function ask() {
    
    return inquirer
    .prompt([
        {
            type: "input",
            name: "pick",
            message: "Pick a letter:"
            
        }
    ])
    .then(answers => {
        userPick = answers.pick;
        console.log("You've picked: " + userPick);
        return userPick;
        letter.end();
    });
};

module.exports = {
    ask,
};

let letter = require("./letter");