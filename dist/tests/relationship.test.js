"use strict";
describe('Relationship', function () {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Customer {
        constructor(name) {
            this.name = name;
        }
    }
    it('should support', () => {
        const person = new Customer("Hadid");
        console.info(person.name);
    });
});
