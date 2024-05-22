//Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

function divide (divident : number , divisor: number){
    let remainder : number = (divident % divisor)
    return remainder
}

console.log('Remainder = ' + divide( 10 , 9))