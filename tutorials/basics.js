// importing module suing destructuring
const { people, ages } = require("./mymodule");
console.log(people);
console.log(ages);

// simple salutation function
const greet = (name) => {
  console.log(`Hello ${name}!`);
};

// captialize word
const capitalise = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

// greet people
for (p of people) {
  greet(capitalise(p));
}
