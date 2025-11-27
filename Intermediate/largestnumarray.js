const numbers = [20,30,40,55,105]
let max =[0];
for(let num of numbers){
    if(num>max){
        max=num
    }
}
console.log("Largest Number is:"+max);
