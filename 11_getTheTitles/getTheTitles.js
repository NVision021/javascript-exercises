const getTheTitles = function(books) {
  let titles = [];
  for (const book of books) {
    titles.push(book.title);
  }
  return titles;
  //return array.map((book) => book.title); is the example, simpler
};

// Do not edit below this line
module.exports = getTheTitles;
