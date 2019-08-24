let inquirer = require('inquirer');

userPick = "";
console.log("\n\nWELCOME TO HANGMAN: IN NODE.JS");
console.log("Guess the old time sayings...\n\n")
ask();

function ask() {
//inquirer prompt to ask user questions
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
        let letter = require("./letter");
        letter.Check();
    });
};

//exporting the letter 
module.exports = {
    ask,
};
