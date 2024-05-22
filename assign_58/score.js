// Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function avgScore() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var average = score.reduce(function (sum, score) { return sum + score; }) / score.length;
    return average;
}
console.log(avgScore(30, 50, 25, 67, 45));
