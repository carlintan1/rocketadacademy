//Minutes in Weeks
// var main = function (input) {
//   var weeks = input;
//   var minutes = weeks * 7 * 24 * 60;
//   var myOutputValue =
//     "In " + input + " weeks there are  " + minutes + " minutes! Wow!";
//   return myOutputValue;
// };

//Farenheight to Celcius
// var main = function (farenheight) {
//   var celsius = (farenheight - 32) * (5 / 9);
//   return (
//     farenheight + "  degrees Farenheight is " + celsius + " degrees Celcius"
//   );
// };

//Road Trip Cost
// var main = function (input) {
//   var length = input;
//   var cost = (length / 9) * 2.2;
//   var myOutputValue = "The estimated fuel cost of your trip is $" + cost;
//   return myOutputValue;
// };

//Ice Cream Buffer
// var main = function (input) {
//   var trips = input;
//   var containers = (trips * 70) / 400;
//   var myOutputValue = "You will need " + containers + " of ice cream";
//   return myOutputValue;
// };

// Time to Type Sonnets
// var main = function (input) {
//   var wordsPerMinute = input;
//   var totalTime = 17677 / wordsPerMinute / 60;
//   var myOutputValue =
//     "You will take " +
//     totalTime +
//     " hours to type all of Shakespeare's sonnets";
//   return myOutputValue;
// };

//Cost of Air Con
// var main = function (input) {
//   var numberOfAirconHours = input;
//   var electricityCosts = numberOfAirconHours * 2 * 0.2;
//   var myOutputValue =
//     "Youre electricy bill will cost $" + electricityCosts + ".";
//   return myOutputValue;
// };

//Screen Time
// var main = function (input) {
//   //input is the number of hours spent per day on their favourite app
//   var numberOfHoursOnAppADay = input;
//   var lifeExpectancyYears = 82;
//   var lifeExpectancyDays = lifeExpectancyYears * 365;
//   var numberOfDaysOnAppInLifetime = numberOfHoursOnAppADay * lifeExpectancyDays;
//   var myOutputValue =
//     "In your lifetime, you will be spending " +
//     numberOfDaysOnAppInLifetime +
//     " of days on this app";
//   return myOutputValue;
//   // output is the nummber of days the user will spend in their lifetime on this app
// };

// Beer Order
// user inputs the average number of customers per day
// output = no. of half barrel size kegs the bar needs per quarter

var main = function (avgNoOfCustomers) {
  const quarterDays = 365 / 4;
  const avgCustomerDrinks = 2;
  const halfBarrelKeg = 124;

  var halfBarrelKegNeeded =
    (avgNoOfCustomers * avgCustomerDrinks * quarterDays) / halfBarrelKeg;
  return `The number of half barrel size kegs needed per quarter is ${halfBarrelKegNeeded}`;
};
