const sumAll = function(num1, num2) {
  //Check if both are numbers
  //Check if both are +ve
  if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 ||
    num2 < 0 || num1 % 1 !== 0 || num2 % 1 !== 0) {
      return "ERROR"
    }

  //Check that num1 < num 2, otherwise, switch
  let smallNum = num1;
  let bigNum = num2;
  if (num1 > num2) {
    smallNum = num2;
    bigNum = num1;
  }

  let sum = null;
  for (let i=smallNum; i <= bigNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
