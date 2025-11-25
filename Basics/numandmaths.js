const cash = 400
const balance = new Number(500.44)
console.log(balance);
console.log(cash);
const name = new String("Samyog")
console.log(name);
console.log(balance.toString().length);
console.log(balance.toFixed()); // gives fixed values for decimal number 
const otherNumber = 23.6966
console.log(otherNumber.toPrecision(2)); // gives number according to the digits in precision parameters
const millions = 100000000
console.log(millions.toLocaleString('en-Np')) // this parameter converts nepali locale style in numbers with commas we just have to pass 'en-Np' in parameters
const Lumba = 2360000
console.log(Lumba);

///////Maths.///

console.log(Math)
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.round(66.66)); // It round off the values
console.log(Math.floor(6.66)); // Floor function
console.log(Math.ceil(66.49)); // Ceiling function
console.log(Math.sqrt(256)); //calculates square root
console.log(Math.max(6,5,1,7)); // gives minimum number 
console.log(Math.min(55,6465,5,684,)); // gives maximum number
console.log(Math.floor(Math.random()*10)+1); // gives random number in floor function value
console.log(Math.ceil(Math.random()*10)+1); // gives random number in ceiling function value

console.log(Math.random()*10+1); // random values with minimum number one
const min = 10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min) // This line generates a random whole number between 'min' and 'max' (both included).
// Math.random() gives a decimal between 0 and 1.
// Multiplying by (max - min + 1) scales it to the desired range.
// Math.floor() converts the decimal to a whole number.
// Adding 'min' shifts the range so the result starts from 'min' instead of 0.













