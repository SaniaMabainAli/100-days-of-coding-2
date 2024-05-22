// Find the Average Grade: Given a list of grades, calculate the average grade.

let numbers : number[] = [5,6,3,7,8]

let avg_grade = numbers.reduce((a,b) => a + b )/ numbers.length 
console.log(avg_grade)