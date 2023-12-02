import {MathUtil} from "../src/math-util";

describe('Namespace', function () {
    it('should support namespace', () => {

        console.info(MathUtil.PI);
        console.info(MathUtil.sum(1, 2, 3, 4, 5));

    });
})