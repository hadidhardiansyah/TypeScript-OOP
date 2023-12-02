"use strict";
describe('Visibility', function () {
    class Counter {
        constructor() {
            this.counter1 = 0;
            this.counter2 = 0;
        }
        increment() {
            this.counter1++;
        }
        getCounter() {
            return this.counter1;
        }
    }
    class DoubleCounter extends Counter {
        increment() {
            this.counter2 += 2; // THIS IS PROTECTED
        }
        getCounter() {
            return this.counter2;
        }
    }
    it('should support private', () => {
        const counter1 = new Counter();
        // counter.counter = 1; THIS IS PRIVATE
        counter1.increment();
        counter1.increment();
        counter1.increment();
        console.info(counter1.getCounter());
    });
    it('should support protected', () => {
        const counter2 = new DoubleCounter();
        counter2.increment();
        counter2.increment();
        counter2.increment();
        console.info(counter2.getCounter());
    });
});
