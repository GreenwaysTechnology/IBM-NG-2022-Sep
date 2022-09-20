//Decorator:

function Course(target: any) {
    //decorator logic
    //inject course information
    Object.defineProperty(target.prototype, 'subject', { value: 'Typescript' })
}

@Course
class Student {
    constructor(public name: string = '') { }
}
let student = new Student('Subramanian') as any
console.log(`${student.name} is learning ${student.subject}`)