describe('Instance Of', function () {

    class Employee {}
    class Manager {}

    const hadid = new Employee();
    const gembil = new Manager();

    it('should have problem using typeof', () => {

        console.info(typeof hadid);
        console.info(typeof gembil);

    });

    it('should support instanceof', () => {

        expect(hadid instanceof Employee).toBe(true);
        expect(hadid instanceof Manager).toBe(false);

        expect(gembil instanceof Manager).toBe(true);
        expect(gembil instanceof Employee).toBe(false);

    });
})