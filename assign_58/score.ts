// Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function avgScore (...score : number []){
   let average = score.reduce((sum , score) => sum + score) / score.length
   return average
}

console.log(avgScore(30, 50, 25, 67, 45))


