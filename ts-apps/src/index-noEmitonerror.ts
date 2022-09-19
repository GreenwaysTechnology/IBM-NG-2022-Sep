
let a: number = 100
console.log(` A is ${a}`)

//reinitalization
a =900
console.log(` A is ${a}`)

//assign wrong type...
/**
 * src/index.ts:10:1 - error TS2322: Type 'string' is not assignable to type 'number'.

10 a="Hello"
   ~

 */
// a="Hello"

console.log(` A is ${a}`)
