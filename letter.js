let word = require("./word");
let index = require("./index");
console.log(index);

let Number =0;
let wrong = [];
let blanks = [];
let wordChosen = "";
letter="";
guesses = 10;

function start(){
    wordChosen = word.getWord();
    console.log(wordChosen);
    for (var i = 0; i < wordChosen.length; i++){
        if (wordChosen[i] !== " "){
            blanks.push("_");
        } else {
            blanks.push(" ");
        }
        // return blanks;
    }
    var stringWord = blanks;
    console.log(stringWord);
};

function Check(letter) {
    console.log()
    if (letter >= "a" && letter <= "z"){
        var isLetterInWord = false;
        for (var i=0; i<wordChosen.length;i++){
            if (wordChosen[i]===letter){
                isLetterInWord = true;
            }
        }
        
        if (isLetterInWord){
            for (var i = 0; i<wordChosen.length; i++){
                if (wordChosen[i]===letter){
                    blanks[i] = letter;
                    console.log("letter"+letter)
                    console.log("what's up?"+ blanks)
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
        console.log("Letters Guessed: "+ wrong + "\n" + blanks);
        index.ask();   
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
letterGuessed = index.ask().then(function(userPick){
    // console.log(letterGuessed);
    console.log(userPick);
    Check(userPick);
    return userPick;
});
end();
console.log(wrong);