// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixedArr = [1, "cars", true, "bikes", 40, "trucks", 23];
var onlyStrings = mixedArr.filter(function (element) { return typeof element === "string"; });
console.log(mixedArr);
console.log(onlyStrings);
