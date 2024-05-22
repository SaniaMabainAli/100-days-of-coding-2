//Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, 
// including properties unique to each shape.

type shape = {
    kind : "rectangle" | "circle" | "triangle"
    radius : number
    width : number
    height : number
    base : number
}

let circle : shape = {
    kind : "circle",
    radius : 6,
    width : 0,
    height : 0,
    base : 0

}

let rectangle : shape ={
    kind : "rectangle",
    radius : 0,
    width : 3,
    height : 4,
    base : 0
}

let triangle : shape = {
    kind : "triangle",
    radius : 0,
    width : 0,
    height : 0,
    base : 7
}

console.log(circle)
console.log(rectangle)
console.log(triangle)