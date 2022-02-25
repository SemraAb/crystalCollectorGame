var targetScore= 0;
var yourScore = 0;
var blue = 0;
var red = 0;
var green = 0;
var yellow = 0;
var wins = 0;
var lost = 0;
let gameEnded = false;
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function () {
  yourScore = 0;
  targetScore = getRandom(20, 80);
  blue = getRandom(1, 15);
  red = getRandom(1, 15);
  green = getRandom(1, 15);
  yellow = getRandom(1, 15);

  $("#targetscore").text(targetScore);
  //testing console
  console.log("Target Score: " + targetScore);
  console.log("BLUE:" + blue);
  console.log("RED:" + red);
  console.log("GREEN:" + green);
  console.log("YELLOW:" + yellow);
};

var checkWin = function () {
  if (yourScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");
    lost++;
    $("#lostcount").text(lost);

    // Restart the game
    startGame();
  } else if (yourScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");
    wins++;
    $("#wincount").text(wins);

    // Restart the game
    startGame();
  }
};

var addValues = function (clickedCrystal) {
  yourScore += clickedCrystal;
  checkWin();
  $("#myscore").text(yourScore);
   //testing console
  console.log("Your Score: " + yourScore);
};
startGame();
$("#blue").click(function () {
  addValues(blue);
});

$("#red").click(function () {
  addValues(red);
});

$("#green").click(function () {
  addValues(green);
});

$("#yellow").click(function () {
  addValues(yellow);
});
