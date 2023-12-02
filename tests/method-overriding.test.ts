describe('Method Overriding', function () {

    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        sayHello(name: string) {
            super.sayHello(name)
            console.info(`And I am your manager`);
        }
    }

    it('should support', () => {

        const employee = new Employee("Hadid");
        employee.sayHello("Gembil");

        const manager = new Manager("Adit");
        manager.sayHello("Gemil");

    });

})