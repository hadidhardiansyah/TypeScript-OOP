describe('Properties', function () {

    class Customer {
        readonly id: number;
        name: string = "Guest";
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        sayHello(name: string) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it('should can have properties', () => {

        const customer = new Customer(1, "Hadid");
        customer.age = 22;

        console.info(customer);
        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);

    });

    it('should can have method', () => {

        const customer = new Customer(1, "Hadid");
        customer.sayHello("Gembil");

    });
})