const { expect } = require('chai');
const challenge = require('./challenge').default;

describe('05 template literals', () => {
    it('returns concatinated string', () => {
        const sentence = challenge('John', 7);

        expect(sentence).to.eq('Hi my name is John and I\'m 7 years old.');
    });
})
