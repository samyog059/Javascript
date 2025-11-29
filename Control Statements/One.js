// Checks if 2 is NOT equal to 1 (using != which checks only value, not type)
// This condition is TRUE, so it will print: true
if (2 != 1) {
    console.log(true);
}

// Checks if 2 is strictly equal to "2" (=== checks BOTH value and data type)
// Number 2 and string "2" are NOT the same type, so this condition is FALSE
// Nothing will print here
if (2 === "2") {
    console.log(true);
}

// Checks if 2 is equal to 2 (== checks only value, type conversion is allowed)
// This condition is TRUE, so it will print: true
if (2 == 2) {
    console.log(true);
}
