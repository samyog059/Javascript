let n = 5;            // n is the total number of rows in the pyramid

for (let i = 1; i <= n; i++) {   // Loop for each row (i goes from 1 to 5)
    
    let space = "";   // space string is empty at the start of each row
    let stars = "";   // stars string is empty at the start of each row

    // ---- SPACE LOOP ----
    for (let s = 1; s <= n - i; s++) { 
        // This loop runs (n - i) times
        // It adds spaces before the stars to shape the pyramid
        space += " "; // add 1 space each time
    }

    // ---- STAR LOOP ----
    for (let j = 1; j <= 2 * i - 1; j++) {
        // This loop prints odd number of stars (1, 3, 5, 7...)
        // Formula (2*i - 1) gives correct number of stars for each row
        stars += "*"; // add 1 star each time
    }

    console.log(space + stars);   // print spaces + stars together to form the pyramid
}
