
class Employee {
    //by default public
    public id: number = 10

    public calculate(): number {
        return 100
    }

}

let emp = new Employee()
console.log(emp.id, emp.calculate())