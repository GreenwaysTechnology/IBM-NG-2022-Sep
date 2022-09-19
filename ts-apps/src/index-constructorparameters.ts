//state initalization
/**
 * 1.inside class
 * 2.outside class using reference variable
 * 3.via constructor
 */

//inside class
class Employee {
    //variables: instance variables
    id: number
    name: string
    status: boolean

    //constructor args :which can be default or optional
    constructor(id: number = 1, name: string = 'subramaian', status: boolean = false) {
        this.id = id;
        this.name = name;
        this.status = status
    }

    //methods:instance methods
    calculate(value: number = 0): number {
        return 100 * value
    }
}
//emp is reference variable
//new is operator
//Employee() is constructor call
let emp = new Employee();
console.log(`id ${emp.id} name ${emp.name} Status ${emp.status} value ${emp.calculate(12)}`)

emp = new Employee(34,'karthik',true);

console.log(`id ${emp.id} name ${emp.name} Status ${emp.status} value ${emp.calculate(12)}`)