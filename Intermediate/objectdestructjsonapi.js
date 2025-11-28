// Creating an object named "Course"
// This object contains details about a course.
const Course = {
    courseName: "Basic to Advanced",
    price: 4500,
    instructor: "Samyog Pangeni"
};

// ---- Object Destructuring ----
// Destructuring means extracting specific values from an object 
// and storing them into separate variables.

// Here we extract 'instructor' from the Course object
// and store it in a new variable called 'instructorName'.
const { instructor: instructorName } = Course;

// Extracting 'price' directly from the Course object
const { price } = Course;

// Displaying the results in the console
console.log(instructorName, price);
