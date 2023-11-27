var convertMinutesToHours = function (delayedMinutes) {
  var delayedHours = delayedMinutes / 60;
  return delayedHours;
};

var main = function (delayedTime) {
  var distanceToTokyo = 200 * 2;
  var timeNeededForTrain2 = 2 - convertMinutesToHours(delayedTime);
  var speedForTrain2 = distanceToTokyo / timeNeededForTrain2;

  return `The speed needed for train 2 is ${speedForTrain2.toFixed(
    2
  )}kph for a signal delay of ${delayedTime} minutes`;
};
