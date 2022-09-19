//function as literal : function can be stored into a variable, that variable can be used to invoke that function.

//es 5 style of function literal

let sayHai = function (name = 'subramanian') {
    return `Hello ${name}`
}
console.log(sayHai())

//es 6 style of function literal - arrow functions

let add = (a: number = 0, b: number = 0): number => {
    return a * b
}

console.log(add(12, 56))

//if function having only return statement: remove return and {}
add = (a: number = 0, b: number = 0): number => a * b
console.log(add(12, 56))