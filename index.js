// this is a comment
// console log a message hello world
console.log("Hello World!");

// declaring a variable using let , the variable is first_name
let first_name = "Godwin";
// console log the variable , the value of the variable will show on the console
console.log(first_name);

// cannot change a constant , always stays the same, result will be undefined
const interestRate = 0.3;
console.log(interestRate);

//
const name = { person: "Godwin", age: 45, id: 012345678901 };
let { person, age, id } = name;
console.log(person);
console.log(age);
console.log(id);

//
let names = "John";
let paragraph = "this is John's car";
let quotation = 'john said "this is my car"';

console.log(typeof names);
console.log(typeof paragraph);
console.log(typeof quotation);

//

let selectedcolors = ["blue", ["red"]];

//

function greet(named, lastName) {
  //   alert("Hello " + named + " " + lastName + "!");
  alert(`Hello ${named} ${lastName}`);
}
greet("Abdul-Malik", "Mohamed");

//
