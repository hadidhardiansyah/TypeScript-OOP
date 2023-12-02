describe('Polymorphism', function () {

    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee) {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }
    }

    function sayHelloWrong(employee: Employee) {
        if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }
    }

    it('should support', () => {

        let employee: Employee = new Employee("Hadid");
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
})