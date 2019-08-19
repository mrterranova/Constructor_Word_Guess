let word = require("./word");
let index = require("./index");

let number =0;
let wrong = [];
let blanks = [];
let wordChosen = "";
letter="";
function start(){
    wordChosen = word.getWord();
    console.log(wordChosen);
    for (var i = 0; i < wordChosen.length; i++){
        if (wordChosen[i] !== " "){
            blanks +=("_ ");
    } else {
        blanks += ("  ");
    }
    // return blanks;
}
var stringWord = blanks;
console.log(stringWord);
};

function Check(letter) {
    if (letter >= "a" && "z"){
        var isLetterInWord = false;

        for (var i=0; i<Number.length;i++){
            if (s[i]===letter){
                isLetterInWord = true;
            }
        }

        if (isLetterInWord){
            for (var i = 0; i<Number.length; i++){
                if (s[i]===letter){
                    blanks[i] = letter;
    
                }
            }
        } else {
            var isAlreadyThere = false;
            for (var i =0; i < wrong.length; i++){
                if(wrong[i] === letter)
                isAlreadyThere = true; 
            }
        }

        if(!isAlreadyThere){
            wrong.push(letter);
            guesses--;
        }

    }
}

function end(){
    if (lettersinWord ==blanks.toString()){
        console.log ("Congrats! You won!");
        start();
    }
    else if (guesses === 0){
        console.log("Sorry. Try again.");
        wrong = [];
        start();
    }
}

start();
console.log(index);
//letterGuessed = index.inquire();
// Check(letterGuessed);
// console.log(letterGuessed);
//end();
console.log(wrong);