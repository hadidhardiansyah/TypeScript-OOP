describe('Static', function () {

    class Configuration {
        static NAME: string = "Belajar TypeScript OOP";
        static VERSION: number = 1.0;
        static AUTHOR: string = "Hadid Hardiansyah";
    }

    class MathUtil {
        static sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
    }

    it('should support static method', () => {

        console.info(MathUtil.sum(1, 2, 3, 4, 5));

    });

    it('should suppoert', () => {

        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);

    });

})