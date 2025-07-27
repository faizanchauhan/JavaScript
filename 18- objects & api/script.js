const course = {
    courseName: "Javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseName);

const {
    courseInstructor: Instructor
} = course //if course.courseInstructor is long then we can reconstruct its name

// console.log(courseInstructor);
console.log(Instructor);