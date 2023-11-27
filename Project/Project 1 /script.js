var playerTotalTimePlayed = 0;
var playerWinCount = 0;
var playerLossCount = 0;
var playerDrawCount = 0;
var playerUsername = "";
var gameMode = ""; // This variable will store the current game mode

var main = function (input) {
  if (!playerUsername) {
    return setPlayerUsername(input);
  }
  // Check if the player wants to set the game mode
  if (!gameMode) {
    return setGameMode(input);
  }

  // Check the current game mode and play accordingly
  if (gameMode === "normal") {
    return gameResult(input.toLowerCase());
  } else if (gameMode === "reverse") {
    return reverseGameResult(input.toLowerCase());
  }
  // Handle unknown game mode
  return `Invalid game mode. Please choose "normal" or "reverse".`;
};

var setGameMode = function (input) {
  // Check if the input is a valid game mode
  if (input.toLowerCase() === "normal" || input.toLowerCase() === "reverse") {
    gameMode = input.toLowerCase();
    return `Hi ${playerUsername}. Game mode set to ${gameMode}. Type "scissors", "paper", or "stone" to play a round.`;
  }

  // Handle invalid input for game mode
  return `Invalid game mode. Please choose "normal" or "reverse".`;
};

var setPlayerUsername = function (input) {
  playerUsername = input.trim();
  return `Hello, ${playerUsername}! Please type "normal" or "reverse" to play SPS`;
};

var gameResult = function (userChoice) {
  var computerChoice = scissorsPaperStone();
  var message = `Hi ${playerUsername} You are playing ${gameMode} SPS.`;
  playerTotalTimePlayed = playerTotalTimePlayed + 1;

  if (
    (userChoice == "scissors" && computerChoice == "stone") ||
    (userChoice == "stone" && computerChoice == "paper") ||
    (userChoice == "paper" && computerChoice == "scissors")
  ) {
    playerLossCount = playerLossCount + 1;
    message += `<br>>You lost!<br>You chose ${userChoice} and the computer chose ${computerChoice}<br>You lost ${playerLossCount} total time(s) out of ${playerTotalTimePlayed} try(s).`;
  }
  if (userChoice == computerChoice) {
    playerDrawCount = playerDrawCount + 1;
    message += `<br>You drew!<br>You chose ${userChoice} and the computer chose ${computerChoice}<br>You drew ${playerDrawCount} total time(s) out of ${playerTotalTimePlayed} try(s).`;
  }

  if (
    (userChoice == "scissors" && computerChoice == "paper") ||
    (userChoice == "stone" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "stone")
  ) {
    playerWinCount = playerWinCount + 1;
    message += `<br>You won!<br>You chose ${userChoice} and the computer chose ${computerChoice}<br>You won ${playerWinCount} total time(s) out of ${playerTotalTimePlayed} try(s).`;
  }

  message += `<br>Type "scissors", "paper", or "stone" to play another round.`;

  return message;
};

var reverseGameResult = function (userChoice) {
  var computerChoice = scissorsPaperStone();
  var message = `Hi ${playerUsername} You are playing ${gameMode} SPS.`;
  playerTotalTimePlayed = playerTotalTimePlayed + 1;

  if (
    (userChoice == "scissors" && computerChoice == "paper") ||
    (userChoice == "stone" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "stone")
  ) {
    playerLossCount = playerLossCount + 1;
    message += `<br>You lost!<br>You chose ${userChoice} and the computer chose ${computerChoice}<br>You lost ${playerLossCount} total time(s) out of ${playerTotalTimePlayed} try(s).`;
  }
  if (userChoice == computerChoice) {
    playerDrawCount = playerDrawCount + 1;
    message += `<br>You drew!<br>You chose ${userChoice} and the computer chose ${computerChoice}<br>You drew ${playerDrawCount} total time(s) out of ${playerTotalTimePlayed} try(s).`;
  }

  if (
    (userChoice == "scissors" && computerChoice == "stone") ||
    (userChoice == "stone" && computerChoice == "paper") ||
    (userChoice == "paper" && computerChoice == "scissors")
  ) {
    playerWinCount = playerWinCount + 1;
    message += `<br>You won!<br>You chose ${userChoice} and the computer chose ${computerChoice}<br>You won ${playerWinCount} total time(s) out of ${playerTotalTimePlayed} try(s).`;
  }

  message += `<br>Type "scissors", "paper", or "stone" to play another round.`;

  return message;
};

var scissorsPaperStone = function () {
  // Define an array of options: "scissors", "paper", and "stone"
  var options = ["scissors", "paper", "stone"];

  // Generate a random index within the length of the options array
  var randomIndex = Math.floor(Math.random() * options.length);

  // Return the option at the randomly generated index
  return options[randomIndex];
};
