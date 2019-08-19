
 function getWord(){
    let classical = ["paint the town red", "drink like a fish", "barking up the wrong tree", "when the rubber hits the road", "close but no cigar", "when the rubber hits the road", "everything but the kitchen sink", "keep your shirt on", "put a sock on it", "sight for sore eyes"];
    
    chosenWord = classical[Math.floor(Math.random()*classical.length)];
    
    return chosenWord;
}

module.exports={
    getWord,
};