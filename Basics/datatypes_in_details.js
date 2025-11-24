// Primitive data types
/*
String
Number
Boolean
Null
Undefined
Symbol
BigInt
*/
const score =100
const ScoreValue = 12.5
const isPassed = true
const OutsideTemp= null
let userEmail;
const id = Symbol('321')
const ido = Symbol ('321')
console.log(id==ido)
const BigNumber =98465134984n


// Non-Primitive data type(Reference type)
/* Arrays, Objects, Functions*/
console.log(typeof BigNumber);

const friends = ["Raju","suman","samyog"];
 let myObjects = {
    name: "Samyog",
    age: 22
    
}
const myfn = function(){ // function declaration
    console.log("Hello World");
    
}
myfn() // function called
console.log(typeof myfn);
console.log(typeof myObjects);


// Memories in Java

// Stack(Primitive), Heap(Non-primitive type)
let myFbname ="Samyog Pangeni"

let anotherName= myFbname

anotherName = "Smg beast"
console.log(myFbname);
console.log(anotherName);
let user ={
    email:"user@gmail.com",
    Czship: "0010250"
}
console.log(user);
let snUser = user
snUser.email = "Sayeas"
console.log(snUser);
console.log(snUser.email);
console.log(user.email);







