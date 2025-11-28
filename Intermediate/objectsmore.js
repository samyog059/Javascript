const Fbuser = new Object() // Singleton object
Fbuser.Email ="Samyogpangeni33@gmail.com"
Fbuser.Password = "Sonapurminerals"
Fbuser.isLoggedIn= true
console.log(Fbuser);

const reguUser={
    email: "smgbeast",
    fullname: {
        userfullname: {
            firstname:"Smg beast",
            Nickname:"Beast"
        }
    }
}
console.log(reguUser.fullname.userfullname.Nickname); // many objects called in nested object creation

const obj1 ={
    1: "a", 2:"b"
}
const obj2 ={3:"c",4:"d"
}
// const obj3 = Object.assign(obj1,obj2) // object is assigned to another object 
const obj3 = {...obj1, ...obj2} // another idea of accessing objects
console.log(obj3); 

