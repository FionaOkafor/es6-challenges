const { expect } = require('chai');
const challenge = require('./challenge').default;

describe('04 spread operator', () => {
    it('returns animal array', () => {
        const values = challenge();

        expect(values).to.have.lengthOf(6);
    });
})
