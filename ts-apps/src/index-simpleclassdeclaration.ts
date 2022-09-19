//class declaration

class Employee {
    //variables: instance variables
    id: number = 1
    name: string = "subramanian"
    status: boolean = true

    //methods:instance methods
    calculate(value: number=0): number {
        return 100 * value
    }
}
//emp is reference variable
//new is operator
//Employee() is constructor call
let emp = new Employee();
console.log(`id ${emp.id} name ${emp.name} Status ${emp.status} value ${emp.calculate(12)}`)