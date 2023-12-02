"use strict";
describe('Method Overriding', function () {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    class Manager extends Employee {
        sayHello(name) {
            super.sayHello(name);
            console.info(`And I am your manager`);
        }
    }
    it('should support', () => {
        const employee = new Employee("Hadid");
        employee.sayHello("Gembil");
        const manager = new Manager("Adit");
        manager.sayHello("Gemil");
    });
});
