"use strict";
describe('Super Constructor', function () {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
    }
    it('should support', () => {
        const employee = new Employee("Hadid", "IT");
        console.info(employee.name);
        console.info(employee.department);
    });
});
