//declare variables :

//string - "" ,'',``(backtick)
let firstName: string = "Subramanian"
let lastName: string = 'Murugan'
//concatnation : +
console.log("Name " + firstName + lastName)
//concatnation : ,
console.log("Name ", firstName, lastName)
//using back tick and tempatle literal syntax `${variableName}` - pure es 6 syntax
console.log(`Name ${firstName}    ${lastName}`)
//use case of backtick notation.
//multi line strings - in old javascript
let doc: string = "<html>" +
    "<head>" +
    "<title>Hello</title" +
    "</head>"

console.log(doc)
//multi line strings using backtick notation.
let title: string = 'Angular in Action'
let newDoc: string = `
  <html>
    <head>
       <title>IBM Home Page </title>
   </head>
   <body>
         <p>${title}</p>
   </body>
   </html>
`
console.log(newDoc)



