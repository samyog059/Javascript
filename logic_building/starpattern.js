// const size = 5; // Define the size of the square

// for (let i = 0; i < size; i++) { // Outer loop for rows
//   let row = ''; // Initialize an empty string for the current row
//   for (let j = 0; j < size; j++) { // Inner loop for columns
//     row += '* '; // Add a star and a space to the row string
//   }
//   console.log(row); // Print the completed row to the console
// }
const size =5
for(let i=0;i<=size;i++){
    let row=""
    for(let j=0;j<=size;j++){
    row+="*"
    }
    console.log(row);
    
}