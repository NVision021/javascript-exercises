//note that each function gets passed an array

const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a ,b) {
	return a-b;
};

const sum = function(arr) {
	const sumOfAll = arr.reduce((total, item) => {
    return total + item;
  }, 0);
  
  return sumOfAll;
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item)
};

const power = function(a, b) {
	return a**b;
};

//done differently to solution
const factorial = function(a) {
	if (a === 0) {
    return 1;
  } else {
    const arr = [];
    for (let i = 1; i <= a; i++) {
      arr.push(i)
    }
    return multiply(arr);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
