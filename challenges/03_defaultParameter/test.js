const { expect } = require('chai');
const challenge = require('./challenge').default;

describe('03 default parameter', () => {
    describe('called with nothing', () => {
        it('returns "John Doe"', () => {
            const name = challenge();

            expect(name).to.eq('John Doe');
        });
    });
    describe('called with first parameter', () => {
        it('returns firstName + " Doe"', () => {
            const name = challenge('Jeff');

            expect(name).to.eq('Jeff Doe');
        });
    });
    describe('called with two parameters', () => {
        it('returns firstName + " " + lastName', () => {
            const name = challenge('Jeff', 'Bob');

            expect(name).to.eq('Jeff Bob');
        });
    });
})
