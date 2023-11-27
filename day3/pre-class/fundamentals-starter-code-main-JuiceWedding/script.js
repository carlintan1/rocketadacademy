var main = function (guests) {
  //user inputs number of guests
  var litresOfOrangeJuiceNeeded = calcLitresNeeded(guests);
  var noOfOrangesNeeded = calcOrangesNeeded(guests);
  return `The number of oranges needed are ${noOfOrangesNeeded} & the ${litresOfOrangeJuiceNeeded} litres are needed`;
};

var calcOrangesNeeded = function (noOfGuests) {
  var noOfOranges = noOfGuests * 4;
  return noOfOranges;
};

var calcLitresNeeded = function (noOfGuests) {
  var litresOfOrangeJuice = (noOfGuests * 90) / 1000;
  return litresOfOrangeJuice;
};
