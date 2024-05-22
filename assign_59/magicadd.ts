//Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other 
// number you give them later.

function adder (num : number){
    return function (numtoadd : number) :number {
        return num + numtoadd
    }
}

let added = adder(15)
console.log(added(10))

