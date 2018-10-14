$(document).ready(function() {

    //Win, Loss, current score variables
    var pcNumber = "";
    var wins = 0;
    var losses = 0;
    var currentScore = 0;
    var getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var randomNumber = getRandomNumber(19, 120); 

    pcNumber = randomNumber;


    function getRandomNumber() {
        document.getElementById("number-to-match").reset();
    }
    

$("#number-to-match").text(randomNumber);
$("#current-score").text(currentScore);
$(".scores-w").text(wins);
$(".scores-l").text(losses);

//crystal values ranging from 1 - 12
    var crystal1 = getRandomNumber(1, 12);
    var crystal2 = getRandomNumber(1, 12);
    var crystal3 = getRandomNumber(1, 12);
    var crystal4 = getRandomNumber(1, 12);

$("#crystal1").attr("data", crystal1);
$("#crystal2").attr("data", crystal2);
$("#crystal3").attr("data", crystal3);
$("#crystal4").attr("data", crystal4);
$(".crystal").click(function() {
    var selectedCrystal = parseInt($(this).attr("data"));
    currentScore = currentScore + selectedCrystal
    $("#current-score").text(currentScore)
    if (currentScore == randomNumber) {
        wins++;
        $(".scores-w").text(wins);
        alert("You win!");
        $("#number-to-match").empty();
        randomNumber = getRandomNumber(19,120);
        $("#number-to-match").html(randomNumber);
        currentScore = 0;
        $("#current-score").html(currentScore)
        newValues();
    }

    if (currentScore > randomNumber) {
        losses++;
        $(".scores-l").text(losses);
        alert("You lose!!");
        $("#number-to-match").empty();
        randomNumber = getRandomNumber(19,120);
        $("#number-to-match").html(randomNumber);
        currentScore = 0;
        $("#current-score").html(currentScore)
        newValues();
    }

    });
});
