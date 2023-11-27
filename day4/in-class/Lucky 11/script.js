var main = function (input) {
  var randomDiceNumber1 = rollDice();
  console.log("first dice number is ", randomDiceNumber1);
  var randomDiceNumber2 = rollDice();
  console.log("second dice number is ", randomDiceNumber2);
  // The default output value is "you lose".
  var myOutputValue = "you lose";

  // If one of the dice matches the input, user wins
  if (randomDiceNumber1 == input || randomDiceNumber2 == input) {
    myOutputValue = "you win";
  }

  // If the total dice roll is 11
  if (randomDiceNumber1 + randomDiceNumber2 == 11) {
    myOutputValue = "you win";
  }
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
