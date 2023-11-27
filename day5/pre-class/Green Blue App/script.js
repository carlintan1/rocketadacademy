var currentGameMode = "waiting for user name";
var bankRoll = 10;
var userName = "";

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var playDiceGame = function (userName, userGuess) {
  var message = "";

  // dice game logic
  var randomDiceRoll = rollDice();
  message =
    userName +
    " you lost! you guessed: " +
    userGuess +
    ". you rolled: " +
    randomDiceRoll +
    ". current bank roll: " +
    bankRoll;

  if (userGuess == randomDiceRoll) {
    bankRoll = bankRoll + 1;
    message =
      userName +
      " you won! you guessed: " +
      userGuess +
      ". you rolled: " +
      randomDiceRoll +
      ". your current bank roll: " +
      bankRoll;
  }

  return message;
};

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = "dice game";

    myOutputValue = "Hello " + userName;
  } else if (currentGameMode == "dice game") {
    myOutputValue = playDiceGame(userName, input);
  }

  return myOutputValue;
};
