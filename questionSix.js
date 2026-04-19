// Create an object called myProfile with at least 4 properties: name, age, country, and hobby. Then write a function
// displayProfile(person) that logs a sentence describing the person using their properties.
// Answer
const myProfile = {
  name: "Ebuka",
  age: 24,
  country: "Nigeria",
  hobby: "Playing Football",
};

function displayProfile(person) {
  return `His name is ${person.name}, he's ${person.age} years old, lives in ${person.country}, and he enjoys ${person.hobby}.`;
}

console.log(displayProfile(myProfile)); // His name is Ebuka, he's 24 years old, lives in Nigeria, and he enjoys Playing Football.
