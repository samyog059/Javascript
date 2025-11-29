// --------------------------------------------------------
// Arrow Function Introduction
// --------------------------------------------------------
/*
 Arrow function = a concise and modern way to write function expressions.
 
 Syntax:
        (parameters) => expression
        (parameters) => { multiple statements }

 Key features:
 ✔ Short and clean syntax
 ✔ Great for simple or one-time-use functions
 ✔ Does NOT have its own 'this' (this is inherited from the parent scope)
 ✔ Useful in array methods like map(), filter(), reduce()
*/

// --------------------------------------------------------
// Example 1: Normal Function
// --------------------------------------------------------

function SamyogOld() {
    console.log("Hello world from the traditional function!");
}
SamyogOld(); // calling the function


// --------------------------------------------------------
// Example 2: Arrow Function (same work, shorter)
// --------------------------------------------------------

const Samyog = (name = "Brother") => console.log(`Hello ${name}`);

Samyog("Samyog");   // calling arrow function
Samyog();           // uses default parameter "Brother"


// --------------------------------------------------------
// Example 3: Arrow function with multiple statements
// --------------------------------------------------------

const add = (a, b) => {
    // When using {...}, you must write return
    return a + b;
};

console.log(add(10, 5)); // Output: 15

const mul = (num1, num2) => {
    return num1*num2
}
console.log(mul(25,36))

// --------------------------------------------------------
// Example 4: Arrow function returning an object
// --------------------------------------------------------
/*
 To return an object in an arrow function,
 wrap it in parentheses () or else JS thinks it's a block.
*/

const getUser = () => ({
    name: "Samyog Pangeni",
    address: "Waling-09",
    skills: ["IT", "Communication", "Productivity"]
});

console.log(getUser());


// --------------------------------------------------------
// Example 5: Arrow function in array methods
// --------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

// map() → transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter() → pick only those that match condition
const even = numbers.filter(n => n % 2 === 0);
console.log(even); // Output: [2, 4]

// reduce() → sum of all numbers
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log(total); // Output: 15


// --------------------------------------------------------
// Example 6: Arrow function & 'this' behavior
// --------------------------------------------------------
/*
 Arrow functions do NOT have their own 'this'.
 They use 'this' from the surrounding scope.
*/

const person = {
    name: "Samyog",
    normalFunc: function() {
        // 'this' refers to the person object
        console.log("Normal function this:", this.name);
    },
    arrowFunc: () => {
        // 'this' DOES NOT refer to the person object
        // 'this' comes from global scope → undefined or window (in browser)
        console.log("Arrow function this:", this.name);
    }
};

person.normalFunc(); // Output: Samyog
person.arrowFunc();  // Output: undefined (because arrow functions don't have their own 'this')
