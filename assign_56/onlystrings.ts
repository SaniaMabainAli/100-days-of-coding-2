// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.


let mixedArr = [1,"cars", true, "bikes", 40, "trucks", 23]

let onlyStrings = mixedArr.filter(element => typeof element === "string") //typeof differentiates b/w any types.

console.log(mixedArr)
console.log(onlyStrings)