//Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other 
// number you give them later.
function adder(num) {
    return function (numtoadd) {
        return num + numtoadd;
    };
}
var added = adder(15);
console.log(added(10));
