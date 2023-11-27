//set the current round
var currentRound = 1;
//set global score to zero
var playerScore = 0;

//correct number of guesses needed in a round
var correctGuessDecider = function () {
  var numOfGuesses;
  // returns an integer 2 , 3 or 4
  numOfGuesses = 2 + Math.floor(Math.random() * 3);
  console.log(numOfGuesses);
  return numOfGuesses;
};

// set the number of correct guesses this round
var correctGuessesThisRound = correctGuessDecider();

//commputer chooses a secret word
var secretWordChooser = function () {
  var secretWord;
  // returns an integer 0 , 1 or 2
  randomInteger = Math.floor(Math.random() * 3);
  console.log(randomInteger);
  if (randomInteger == 0) {
    secretWord = "banana";
  }
  if (randomInteger == 1) {
    secretWord = "chisel";
  }
  if (randomInteger == 2) {
    secretWord = "faucet";
  }
  return secretWord;
};

var main = function (input) {
  return getOutputMessage(input);
};

// get the output messsage which includes the user's input, the computer word and how many guesses the user still needs to win (2 minus the user's correct guesses or score)
var getOutputMessage = function (userGuess) {
  var computerWord = secretWordChooser();
  var message;
  var guessesLeft;

  if (userGuess == computerWord) {
    playerScore = playerScore + 1;
  }

  // if (userGuess !== computerWord) {
  //   playerScore = 0;
  // }

  if (playerScore < correctGuessesThisRound) {
    var guessesLeft = correctGuessesThisRound - playerScore;
    message = `This is your number ${currentRound} round. You need to guess ${correctGuessesThisRound} times in a row this round to win. You chose ${userGuess} and the computer chose ${computerWord}<br>You still need ${guessesLeft} more guesses`;
  }

  if (playerScore >= correctGuessesThisRound) {
    message = `You won!<br>You chose ${userGuess} and the computer chose ${computerWord}<br>You have guessed correctly a total of ${playerScore} times in a row`;
    currentRound = currentRound + 1;
    correctGuessesThisRound = correctGuessDecider();
    playerScore = 0;
  }

  return message;
};
