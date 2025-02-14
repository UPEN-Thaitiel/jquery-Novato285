var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var started = false;
var userClickedPattern = [];
var level = 0;

// event listener for any keyboard's key
$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        started = true;
    }
});

// event listener for any button (color square) clicked
$("button").click(function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});

function nextSequence () {
    level = level + 1;
    $("#level-title").text("Level" + level);
    let randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}
function playSound (randomChosenColour) {
    let audio = new Audio ("sounds/" + randomChosenColour + ".mp3")
    audio. play();
}
function animatePress(currenColour) {
    $("#" + currenColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currenColour).removeClass("pressed");
    }, 100);
}
function checkAnswer (currentLevel) {
    
}