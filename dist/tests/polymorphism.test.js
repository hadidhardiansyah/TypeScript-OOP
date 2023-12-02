"use strict";
describe('Polymorphism', function () {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class VicePresident extends Manager {
    }
    function sayHello(employee) {
        if (employee instanceof VicePresident) {
            const vp = employee;
            console.info(`Hello VP ${vp.name}`);
        }
        else if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello manager ${manager.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    function sayHelloWrong(employee) {
        if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello manager ${manager.name}`);
        }
        else if (employee instanceof VicePresident) {
            const vp = employee;
            console.info(`Hello VP ${vp.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    it('should support', () => {
        let employee = new Employee("Hadid");
        console.info(employee);
        employee = new Manager("Hadid");
        console.info(employee);
        employee = new VicePresident("Hadid");
        console.info(employee);
    });
    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Hadid"));
        sayHello(new Manager("Gembil"));
        sayHello(new VicePresident("Selon"));
    });
    it('should support method parameter polymorphism wrong', () => {
        sayHelloWrong(new Employee("Hadid"));
        sayHelloWrong(new Manager("Gembil"));
        sayHelloWrong(new VicePresident("Selon"));
    });
});
