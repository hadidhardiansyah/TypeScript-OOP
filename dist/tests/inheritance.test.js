"use strict";
describe('Inheritance', function () {
    // parent class
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class Director extends Manager {
    }
    it('should suppport', () => {
        const employee = new Employee("Hadid");
        console.info(employee.name);
        const manager = new Manager("Adit");
        console.info(manager.name);
        const director = new Director("Gembil");
        console.info(director.name);
    });
});
