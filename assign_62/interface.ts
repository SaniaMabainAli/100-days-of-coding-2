//Making a Student Template: Create a blueprint for student information, including their name, age, 
// and the classes they're taking, and then fill in this blueprint with an example student.

interface studentType {
    Fname : string
    Age : number
    Courses : string []
}

let student : studentType = {
    Fname : "Sara",
    Age : 13,
    Courses : ["Math", "Physics", "Computer"]
}

console.log(student)
