//Cost of cellular data

// User will enter how many GB they use per month
// App will output how much $$ they are paying per GB of data

// If the user exceeds 50 GB, theu will auto purchase another 50GB plan

var main = function (input) {
  dollarCostPerGB = caclCostPerGB(input);
  return `The user is paying $ ${dollarCostPerGB} per GB`;
};

//number of additional plans

var caclCostPerGB = function (inputGB) {
  var numOfPlans = Math.ceil(inputGB / 50);
  console.log("this is the num of plans");
  console.log(numOfPlans);
  var costOfPlans = numOfPlans * 19.99;
  console.log("this is the cost of plans");
  console.log(costOfPlans);
  var costPerGB = costOfPlans / inputGB;
  console.log("this is the cost of per gb");
  console.log(costPerGB);
  return costPerGB;
};
