//Decorator:

// function Course(target: any) {
//     //decorator logic
//     //inject course information
//     Object.defineProperty(target.prototype, 'subject', { value: 'Typescript' })
// }

// function Course(courseInfo: any) {
//     return function (target: any) {
//         Object.defineProperty(target.prototype, 'subject', { value: courseInfo })
//     }
// }

// @Course('Angular with Java')
// class Student {
//     constructor(public name: string = '') { }
// }
// let student = new Student('Subramanian') as any
// console.log(`${student.name} is learning ${student.subject}`)

function Course(courseInfo: any) {
    return function (target: any) {
        Object.defineProperty(target.prototype, 'courseInfo', { value: courseInfo })
    }
}

@Course({ name: 'Angular with java', duration: '40 hrs', instructor: 'Subramanian' })
class Student {
    constructor(public name: string = '') { }
}
let student = new Student('Ram') as any
console.log(`${student.name} is learning ${student.courseInfo.name} ${student.courseInfo.duration} ${student.courseInfo.instructor}`)