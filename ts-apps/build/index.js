var Employee = /** @class */ (function () {
    function Employee() {
        //by default public
        this.id = 10;
    }
    Employee.prototype.calculate = function () {
        return 100;
    };
    return Employee;
}());
var emp = new Employee();
console.log(emp.id, emp.calculate());
