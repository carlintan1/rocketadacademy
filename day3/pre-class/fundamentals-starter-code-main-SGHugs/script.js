var main = function (seconds) {
  //user inputs number of seconds they like to hug
  var numOfYearsNeeded = calcYearsNeededToHug(seconds);
  return `The number of years needed are ${numOfYearsNeeded}`;
};

var calcYearsNeededToHug = function (numOfSecondsHug) {
  const numOfPplInSG = 7000000;
  var numOfHugHoursADay = 24 - 9;
  var numOfDays =
    (numOfSecondsHug * numOfPplInSG) / (60 * 60 * numOfHugHoursADay);
  var numOfYears = numOfDays / 365;
  return numOfYears;
};
