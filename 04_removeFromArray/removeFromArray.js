const removeFromArray = function(array, ...moreArgs) {
  let filteredArray = array.filter(arrayItem => !moreArgs.includes(arrayItem));
  return filteredArray;

  //-OR

  /*const newArray = [];
  for (const item of array) {
    if (!moreArgs.includes(item)) {
      newArray.push(item);
    }
  };
  // and return that array
  return newArray; */

} 

module.exports = removeFromArray;
