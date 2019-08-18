
function getWord(){
    let classical = ["JOHANN SEBASTIAN BACH", "GUSTAV HOLST", "GIUSEPPE VERDI", "LUDWIG VAN BEETHOVEN", "JOHANN STRAUSS I", "WOLFGANG AMADEUS MOZART", "REMO GIAZOTTO", "GEORGES BIZET", "EDWARD ELGAR", "LUIGI BOCCHERINI"];
    
    chosenWord = classical[Math.floor(Math.random()*classical.length)];
    
    return chosenWord;
}