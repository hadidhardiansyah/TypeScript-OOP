"use strict";
describe('Class', function () {
    class Customer {
        constructor() {
            console.info("Create new customer");
        }
    }
    class Order {
    }
    it('should can create class', () => {
        const customer = new Customer();
        const order = new Order();
    });
    it('should can create constructors', () => {
        new Customer();
        new Customer();
    });
});
