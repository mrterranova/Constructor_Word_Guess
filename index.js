let inquirer = require('inquirer');

console.log ("\n\nWELCOME TO HANGMAN: IN NODE.JS"); 
console.log ("Guess the old time sayings...\n\n")

let letter = require("./letter");
ask();
function ask(){

inquirer
.prompt([
    {
        type: "input",
        name: "pick",
        message: "Pick a letter:"
        
    }
])
.then(answers => {
    userPick = answers.pick;
    console.log("You've picked: "+ userPick);
    module.exports={
        userPick,
    };
});
};