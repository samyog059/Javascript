// ------------------------------
// 1. CREATE DATE AND TIME
// ------------------------------

// Creates a Date object with current date & time
let now = new Date();
console.log("Current Date & Time =", now);


// ------------------------------------------
// 2. GET DIFFERENT PARTS OF DATE & TIME
// ------------------------------------------

console.log("Year =", now.getFullYear());         // Example: 2025
console.log("Month =", now.getMonth());           // 0-11 (0 = Jan)
console.log("Day (Date) =", now.getDate());       // Day of month (1-31)
console.log("Hour =", now.getHours());            // 0-23
console.log("Minutes =", now.getMinutes());       // 0-59
console.log("Seconds =", now.getSeconds());       // 0-59
console.log("Day of Week =", now.getDay());       // 0-6 (0 = Sunday)


// ------------------------------------------
// 3. SET (CHANGE) DATE & TIME
// ------------------------------------------

let d = new Date();      // Create new date
d.setFullYear(2030);     // Change year
d.setMonth(5);           // Change month (5 = June)
d.setDate(15);           // Change day

console.log("Changed Date =", d);


// ------------------------------------------
// 4. DATE & TIME AS STRINGS
// ------------------------------------------

console.log("toString() =", now.toString());                // Full date + time
console.log("toDateString() =", now.toDateString());        // Only date
console.log("toTimeString() =", now.toTimeString());        // Only time
console.log("Local Date =", now.toLocaleDateString());      // Easy readable date
console.log("Local Time =", now.toLocaleTimeString());      // Easy readable time


// ------------------------------------------
// 5. TIMESTAMP (VERY IMPORTANT)
// ------------------------------------------

let stamp = Date.now();       // Milliseconds since 1970
console.log("Timestamp =", stamp);


// ------------------------------------------
// 6. DISPLAY CURRENT DATE & TIME SEPARATELY
// ------------------------------------------

console.log("Today's Date =", now.toLocaleDateString());
console.log("Current Time =", now.toLocaleTimeString());


// ------------------------------------------
// 7. BONUS: REAL-TIME CLOCK (Runs Every 1 sec)
// ------------------------------------------

setInterval(() => {
    let t = new Date();
    console.log("Live Time:", t.toLocaleTimeString());
}, 1000);


// ------------------------------------------
// 8. BONUS: DIFFERENCE BETWEEN TWO DATES
// ------------------------------------------

let firstDate = new Date("2025-01-01");
let secondDate = new Date("2025-12-31");

// Difference in milliseconds
let diff = secondDate - firstDate;

// Convert to days
let days = diff / (1000 * 60 * 60 * 24);

console.log("Days Difference =", days);
