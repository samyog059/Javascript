function CalculateCartPrice(...num1){ // (....)Rest operator in passing function
    return num1
}
console.log(CalculateCartPrice(200,400,400));

const User = {
    username:"Samyog",
    Price: "1200"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);
    
    
}
handleObject(User)

const Myarray = [45,95,65]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(Myarray));
