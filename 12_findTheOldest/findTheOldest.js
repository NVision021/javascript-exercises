const findTheOldest = function(data) {
      
  function Person(person) {
    let deathYear = "";
    this.name = person.name;
    if (person.yearOfDeath === undefined) {
      deathYear = 2024;
    } else {
      deathYear = person.yearOfDeath;
    }
    this.age = deathYear - person.yearOfBirth;
  }

  const nameAgeData = data.map(person => new Person(person));
  
  nameAgeData.sort((current, next) => next.age - current.age)

  
  return nameAgeData[0];

};

// Do not edit below this line
module.exports = findTheOldest;
