const { expect } = require('chai');
const challenge = require('./challenge').default;

describe('06 array filter', () => {
    it('returns array of even number', () => {
        const filtered = challenge([1, 2, 3, 4]);

        expect(filtered).to.deep.eq([2, 4]);
    });
})
