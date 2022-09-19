//classes are depending on each other 

class EmployeeService {
    constructor() {

    }
    findAll(): string {
        return 'Employee Service'
    }
    save(emplyee: string) {
        console.log(emplyee)
        return 'saved'
    }
}

class EmployeeController {
    //type of empService is EmployeeService
    //has-a /dependency
    empService: EmployeeService
    constructor(empService: EmployeeService) {
        this.empService = empService
    }

    findAll() {
        return this.empService.findAll()
    }
}

//link objects

let empService = new EmployeeService()
//constructor injector
let empCtrl = new EmployeeController(empService)

console.log(empCtrl.findAll())

//constructor injector
let empCtrl1 = new EmployeeController(new EmployeeService())
console.log(empCtrl1.findAll())
