//set global score to zero
var playerScore = 0;

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
  if (playerScore < 2) {
    var guessesLeft = 2 - playerScore;
    message = `You chose ${userGuess} and the computer chose ${computerWord}<br>You still need ${guessesLeft} more guesses`;
  }
  if (playerScore >= 2) {
    message = `You won!<br>You chose ${userGuess} and the computer chose ${computerWord}<br>You have guessed correctly a total of ${playerScore} times`;
  }
  return message;
};
