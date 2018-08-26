const { expect } = require('chai');
const challenge = require('./challenge').default;

describe('06 array map', () => {
    it('returns array of double values', () => {
        const doubles = challenge([1, 2, 3, 4]);

        expect(doubles).to.deep.eq([2, 4, 6, 8]);
    });
})
