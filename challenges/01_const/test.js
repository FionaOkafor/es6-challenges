const { expect } = require('chai');
const challenge = require('./challenge').default;

describe('01 const', () => {
    it('throws an error', () => {
        expect(challenge).to.throw(Error, 'Assignment to constant variable.');
    });
})
