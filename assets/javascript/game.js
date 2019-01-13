$(document).ready(function(){

    var yourScore = 0;
    var wins = '';
    var losses = '';
    var minScore = 19;
    var maxScore = 120;
    var randomNumber = '';
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;



//define logic

//gen random number between (such,such)
function randomNumberGen(min,max) {

    return Math.floor(Math.random()*(max-min+1)+min)

}

//set values for ea crystal
function setCrystalVal () {
    var minVal = 1;
    var maxVal= 12;
//gen random number between 19-120
    randomNumber =  randomNumberGen(minScore, maxScore);
//gen crystal values
    crystalOne = randomNumberGen (minVal, maxVal);
    crystalTwo = randomNumberGen (minVal, maxVal);
    crystalThree = randomNumberGen (minVal, maxVal);
    crystalFour = randomNumberGen (minVal, maxVal);
}

//Show scores/values for ea
function scoreText() {
    $("#winsP").text(wins);
    $("#lossesP").text(losses);
    $("#randomP").text(randomNumber);
    $("#yourScoreP").text(yourScore);

}

function reset(){
    yourScore = 0;
    randomNumber = '';
    setCrystalVal();
    scoreText();
}

function youWin() {
    alert ("YOU WON!");
    wins++;
    $("#winsP").text(wins);
    reset();
}

function youLose() {
    alert ("You lose :(");
    losses++;
    $("#lossesP").text(losses);
    reset();
}

//when you click on crystals
$("#cryst1").on("click", function(){
    if (randomNumber == yourScore) {
        youWin();
    }
    else if (randomNumber < yourScore) {
        youLose();
    }
    else {
        yourScore += crystalOne;
        $("#yourScoreP").text(yourScore);
    }
});

$("#cryst2").on("click", function(){
    if (randomNumber == yourScore) {
        youWin();
    }
    else if (randomNumber < yourScore) {
        youLose();
    }
    else {
        yourScore += crystalTwo;
        $("#yourScoreP").text(yourScore);
    }
});

$("#cryst3").on("click", function(){
    if (randomNumber == yourScore) {
        youWin();
    }
    else if (randomNumber < yourScore) {
        youLose();
    }
    else {
        yourScore += crystalThree;
        $("#yourScoreP").text(yourScore);
    }
});

$("#cryst4").on("click", function(){
    if (randomNumber == yourScore) {
        youWin();
    }
    else if (randomNumber < yourScore) {
        youLose();
    }
    else {
        yourScore += crystalFour;
        $("#yourScoreP").text(yourScore);
    }
});

setCrystalVal();
scoreText();

});