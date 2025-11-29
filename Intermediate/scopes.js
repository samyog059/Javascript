// 'if' block starts → this is a block scope
if (true) {

    let a = 10       // 'let' is block-scoped → accessible only inside this block
    const b = 55     // 'const' is block-scoped → accessible only inside this block
    var c = 39       // 'var' is NOT block-scoped → it becomes global (or function scoped)

} // block ends here

// Outside the block:
console.log(c);      // prints 39 → because 'var' is not limited to block scope
// console.log(a);   // ERROR → 'a' is block-scoped
// console.log(b);   // ERROR → 'b' is block-scoped
