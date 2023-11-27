var main = function (input) {
  var randomDiceNumber1 = rollDice();
  console.log("first dice number is ", randomDiceNumber1);
  var randomDiceNumber2 = rollDice();
  console.log("second dice number is ", randomDiceNumber2);
  // The default output value is "you lose".
  var myOutputValue = "you lose";
  // If the input matches both random dice numbers, output value is "you win".
  // if the user guess is equal to dice 1 and dice 2 and not snakeeyes
  // (dice 1 is 1 and dice 2 is 1 ) is not true
  if (
    randomDiceNumber1 == input &&
    randomDiceNumber2 == input &&
    !(randomDiceNumber1 == 1 && randomDiceNumber2 == 1)
  ) {
    myOutputValue = "you win";
  }

  // If the user's guess is within 1 of any of the two dice, output value is "you win".
  // if (
  //   Math.abs(input - randomDiceNumber1) <= 1 ||
  //   Math.abs(input - randomDiceNumber2) <= 1
  // ) {
  //   myOutputValue = "you win";
  // }

  // If the user's guess is within 1 for both dice, output value is "you win".
  // if (
  //   Math.abs(input - randomDiceNumber1) <= 1 &&
  //   Math.abs(input - randomDiceNumber2) <= 1
  // ) {
  //   myOutputValue = "you win";
  // }

  // Check if the user didn't roll snake eyes and if their guess is within 1 for either dice.
  // if (
  //   !(randomDiceNumber1 == 1 && randomDiceNumber2 == 1) &&
  //   (Math.abs(input - randomDiceNumber1) <= 1 ||
  //     Math.abs(input - randomDiceNumber2) <= 1)
  // ) {
  //   myOutputValue = "you win";
  // }

  // Check if the user's guess is within 1 for either dice or if they rolled snake eyes.
  // if (
  //   Math.abs(input - randomDiceNumber1) <= 1 ||
  //   Math.abs(input - randomDiceNumber2) <= 1 ||
  //   (randomDiceNumber1 == 1 && randomDiceNumber2 == 1)
  // ) {
  //   myOutputValue = "you win";
  // }

  return myOutputValue;
};

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
