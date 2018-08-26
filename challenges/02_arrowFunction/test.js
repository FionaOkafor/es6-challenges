const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const expect = chai.expect;

const challenge = require('./challenge').default;

describe('02 arrow function', () => {
    it('does use an arrow function', (done) => {
        const cb = sinon.spy();
        challenge(cb);
        setTimeout(function () {
            expect(cb).to.have.been.calledWith('Some value');
            done();
        }, 30);
    });
})
