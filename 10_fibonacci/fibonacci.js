const fibonacci = function(num) {
  num = Number(num);
  if (num < 0) {
    return ("OOPS");
  }

  if (num === 0) {
    return (0);
  }

  let firstNumber = 0; 
  let secondNumber = 1;
  let total = 1;

  for (let i = 1; i < num; i++) {
    total = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = total;
    
  }

  return total;



};

// Do not edit below this line
module.exports = fibonacci;
