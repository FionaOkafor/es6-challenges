const { expect } = require('chai');
const challenge = require('./challenge').default;

describe('07 array reduce', () => {
    it('returns sum', () => {
        const sum = challenge([1, 2, 3, 4]);

        expect(sum).to.eq(10);
    });
})
