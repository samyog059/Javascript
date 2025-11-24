const name = "Samyog";
const age = 22;

// String Interpolation (using backticks and ${})
console.log(`Hello my name is ${name} and my age is ${age}`);
console.log(`Hello world It's me ${name}`);

// Methods of String
const gameName = new String('Smg beast');  // String object creation

console.log(gameName[2]);          // Shows the character at index 2
console.log(gameName.__proto__);   // Shows string methods available
console.log(gameName.length);      // Tells how many characters are there
console.log(gameName.toUpperCase()); // Converts the string to UPPERCASE
console.log(gameName.charAt(4));     // Shows which character is at index 4
console.log(gameName.indexOf('s'));  // Shows index of first 's'

const newString = gameName.substring(0, 6); 
console.log(newString);            // substring → cuts string from index 0 to 5

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);        // slice → can cut using negative index

// ---------------------------
// ⭐ TRIM METHOD
// ---------------------------
const messyString = "   Hello World   ";
console.log(messyString.trim());   // Removes spaces from start and end

// ---------------------------
// ⭐ REPLACE METHOD
// ---------------------------
const replaceExample = "I love JavaScript";
console.log(replaceExample.replace("JavaScript", "Programming"));
// replace → changes part of the string

// ---------------------------
// ⭐ INCLUDES METHOD
// ---------------------------
console.log(gameName.includes("Smg")); 
// includes → checks if word exists (true/false)

// ---------------------------
// ⭐ SPLIT METHOD
// ---------------------------
const sentence = "HTML CSS JavaScript";
console.log(sentence.split(" "));
// split → breaks string into an array

// ---------------------------
// ⭐ CONCAT METHOD
// ---------------------------
const first = "Samyog";
const last = "Pangeni";
console.log(first.concat(" ", last)); 
// concat → joins strings

// ---------------------------
// ⭐ STARTSWITH & ENDSWITH
// ---------------------------
console.log(gameName.startsWith("Smg"));  
// true → because string starts with 'Smg'

console.log(gameName.endsWith("beast"));  
// true → because string ends with 'beast'

// ---------------------------
// ⭐ REPEAT METHOD
// ---------------------------
console.log(name.repeat(3)); 
// repeat → repeats string 3 times

// ---------------------------
// ⭐ PADSTART & PADEND
// ---------------------------
const num = "5";
console.log(num.padStart(4, "0")); 
// padStart → adds 0 at start → 0005

console.log(num.padEnd(4, "*"));   
// padEnd → adds * at end → 5***
