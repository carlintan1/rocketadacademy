var main = function (costPerLiter) {
  //user inputs dollar amount of paint per liter
  var totalCost = costOfPaint(costPerLiter);
  return `The total cost is $${totalCost.toFixed(2)}`;
};

var convertCmSquareToMetreSquare = function (cmSquare) {
  var metreSquare = cmSquare / 10000;
  return metreSquare;
};

var costOfPaint = function (costPerLitrePaint) {
  var areaOfRooms = 3 * 3 * 6;
  var areaOfWindowsAndDoors = convertCmSquareToMetreSquare(90 * 150 * 14);
  var areaToPaint = 2 * (areaOfRooms - areaOfWindowsAndDoors);
  var litresNeededToPaint = areaToPaint / 300;
  var costOfPaintNeeded = litresNeededToPaint * costPerLitrePaint;
  return costOfPaintNeeded;
};
