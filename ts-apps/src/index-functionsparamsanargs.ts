//functions

function sayHello() {
    console.log('Hello')
}
sayHello()

//functions with args and parameter

function add(a: number, b: number) {
    let c = a + b
    console.log(c)
}
add(10, 10)
//add("hello", "subramanian")

//return value
function addV1(a: number, b: number): number {
    let c = a + b
    //console.log(c)
    return c
}
addV1(10, 10)

//what if i dont supply value: default value or optional operator

//default args : es 6 feature
function multiply(a: number = 0, b: number = 0):number {
    return a * b
}
console.log(multiply(10, 10))
console.log(multiply())

//optional parameter : no values are supplied but still we can skip
function div(a?: number, b?: number):number {
     return a / b  
}
console.log(div(10, 10))
console.log(div())



