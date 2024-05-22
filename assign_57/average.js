// Find the Average Grade: Given a list of grades, calculate the average grade.
var numbers = [5, 6, 3, 7, 8];
var avg_grade = numbers.reduce(function (a, b) { return a + b; }) / numbers.length;
console.log(avg_grade);
