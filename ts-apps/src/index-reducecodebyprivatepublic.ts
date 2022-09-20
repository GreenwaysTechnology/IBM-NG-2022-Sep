
// class Customer {
//     //instance variables
//     public id: number
//     public name: string
//     public status: boolean
//     //constructor args are local variables
//     constructor(id: number = 1, name: string = '', status: boolean = false) {
//         this.id = id
//         this.name = name
//         this.status = status
//     }
// }


// class Customer {
//     //instance variables
//     id: number
//     name: string
//     status: boolean
//     //constructor args are local variables
//     constructor(id: number = 1, name: string = '', status: boolean = false) {
//         this.id = id
//         this.name = name
//         this.status = status
//     }
// }

//reduce code by removing instance variables from the class declaration
//we have to convert local variables(constructor args) into instance variables
//we can convert constructor args variables into instance variable by adding "private or public keyword"
// class Customer {
//     //constructor args are local variables
//     constructor(public id: number = 1, public name: string = '', public status: boolean = false) {
//         this.id = id
//         this.name = name
//         this.status = status
//     }
// }

//remove variable initalization code inside constructor because variables left side and right side both are same.
class Customer {
    //constructor args are local variables
    constructor(public id: number = 1, public name: string = '', public status: boolean = false) { }
}

let cust = new Customer(12, 'Subramanian', true)
console.log(cust)