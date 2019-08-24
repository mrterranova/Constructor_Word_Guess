// this function goes through list of words and chooses one randomly from array
 function getWord(){
     //array of phrases
    let classical = ["paint the town red", "drink like a fish", "barking up the wrong tree", "when the rubber hits the road", "close but no cigar", "when the rubber hits the road", "everything but the kitchen sink", "keep your shirt on", "put a sock on it", "sight for sore eyes"];
    // picking word
    chosenWord = classical[Math.floor(Math.random()*classical.length)];
    //returning word
    return chosenWord;
}

//exporting word from file
module.exports={
    getWord,
};