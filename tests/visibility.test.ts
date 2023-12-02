describe('Visibility', function () {
    
    class Counter {
        private counter1: number = 0;
        protected counter2: number = 0;

        public increment() {
            this.counter1++;
        }

        public getCounter(): number {
            return this.counter1;
        }
    }

    class DoubleCounter extends Counter {
        public increment() {
            this.counter2 += 2; // THIS IS PROTECTED
        }

        public getCounter(): number {
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

})