// function greet() {
//     console.log("HELLO, welcome to javascript");
// }

// greet(); // calling the function
// greet(); // calling the function
// greet(); // calling the function

// function greetUser(name) {
//     console.log(`Hello, ${name}!`);
// }

// greetUser("Alice");
// greetUser("Bob");
// greetUser("Charles");

// function addNumbers (num1, num2, num3) {
//     console.log(`Sum: ${num1 + num2 + num3}`);
// }

// addNumbers(5, 10); // Output: 15
// addNumbers(10, 10); // Output: 20
// addNumbers(1, 2, 3); // Output: 20


// anonymous function inside variable
// const greet = function(name) {
//     return `Hello, ${name}`;
// };

// console.log(greet("Alice"));
// console.log(greet);

// function multiply(x, y) {
//     return x*y;
// }

// console.log(multiply);

//  Arrow Functions (Shorter Syntax), Modern way to write functions

// const square = (num) => num**2;

// with curly braces use return statement, required for multiple lines
// const square = (num) => {
//     return num**2;
// }

// console.log(square(5)); // Output: 25

//  () => {}
// const multiply = (a, b) => {
//     return a*b;
// };

// console.log(multiply(3,4)); // Output: 12

// Funciton Scope and Hoisting

// let globalVar = "I am global";

// function testScope() {
//     let localVar = "I exist only in this function"
//     console.log(globalVar); // Works
//     console.log(localVar); // Works

// }

// testScope()
// console.log(globalVar) //Works
// console.log(localVar) //Error;


// function declarations are hoisted, can be called before definition
hello();

function hello() {
    console.log("Hello from a function declaration");
}

// funciton expressions must be called after definition
const greet = function() {
    console.log("Hello from a function expression");
};

greet();

