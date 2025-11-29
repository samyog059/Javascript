// 'this' = refers to the object from which the function is called
// The value of 'this' depends on the immediate calling context.
// Example: In College.Info(), 'this' refers to the College object.

const College = {
    code: 290,
    Location: "Waling-09, Syangja",
    name: "Waling Multiple Campus",

    // Info is a method of the College object
    // Inside this method, 'this' refers to the College object
    Info: function() {
        console.log(`This is ${this.name} Located in ${this.Location} which have the code is ${this.code}`)
    }
}

const School = {
    code: 105,
    Location: "Waling-09, Syangja",
    name: "Shree Purnamrit Bhawani Secondary School",

    // Info is a method of the School object
    // Here, 'this' refers to the School object
    Info: function() {
        console.log(`This is ${this.name} Located in ${this.Location} which have the code is ${this.code}`)
    }
}

// Calling the Info() method from the College object
// So 'this' inside Info refers to College
College.Info()

// Calling the Info() method from the School object
// So 'this' inside Info refers to School
School.Info()
