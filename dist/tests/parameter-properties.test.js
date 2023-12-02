"use strict";
describe('Parameter Properties', function () {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    it('should support', () => {
        const person = new Person("Hadid");
        console.info(person.name);
        person.name = "Gembil";
        console.info(person.name);
    });
});
