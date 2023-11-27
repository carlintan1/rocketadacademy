// 4D with Single Digit Comparison

// player wins if their guess matches any of the 4 digits
// player inputs a single digit
// computer generates 4 random digits btw 0 and 9
// output the players guess and all the digits.

var main = function (input) {
  var firstDigit = digitGenerator();
  var secondDigit = digitGenerator();
  var thirdDigit = digitGenerator();
  var fourthDigit = digitGenerator();

  var myOutputValue = `You lose! You're guess was ${input} and the 4D digits were ${firstDigit} ${secondDigit} ${thirdDigit} ${fourthDigit}`;
  console.log(
    input == firstDigit ||
      input == secondDigit ||
      input == thirdDigit ||
      input == fourthDigit
  );
  if (
    input == firstDigit ||
    input == secondDigit ||
    input == thirdDigit ||
    input == fourthDigit
  ) {
    myOutputValue = `You win! You're guess was ${input} and the 4D digits were ${firstDigit} ${secondDigit} ${thirdDigit} ${fourthDigit}`;
  }

  return myOutputValue;
};

var digitGenerator = function () {
  // Generate a decimal from 0 through 9, inclusive of 0 and exclusive of 9.
  var randomDecimal = Math.random() * 10;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 9 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  return randomInteger;
};

//Hawker Food Categorisation
// user inputs a food , output gives the base of the food, (rice, noodle, others)
// input could be "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa".

// var main = function (input) {
//   var myOutputValue = foodChecker(input);
//   console.log("Output:", myOutputValue);
//   console.log(input == "chicken rice");
//   return myOutputValue;
// };

// var foodChecker = function (dish) {
//   // the default value is Others
//   var dishBase = "Others";
//   console.log("Output:", dishBase);

//   if (dish == "chicken rice" || dish == "duck rice" || dish == "nasi lemak") {
//     dishBase = "Rice";
//   }

//   if (dish == "laksa" || dish == "hokkien mee") {
//     dishBase = "Noodles";
//   }

//   return dishBase;
// };
