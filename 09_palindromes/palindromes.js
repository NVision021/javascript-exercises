const palindromes = function (word) {
  const viableCharacters = "1234567890qwertyuiopasdfghjklzxcvbnm";

  word = word.toLowerCase().trimEnd().trimStart().split("");

  const wordArray = word.filter(letter => viableCharacters.includes(letter)).join("");

  const reverseArray = wordArray.split("").toReversed().join("");

  return wordArray === reverseArray;
  
};

// Do not edit below this line
module.exports = palindromes;
