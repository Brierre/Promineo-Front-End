let expect = chai.expect;

describe('Card', () => {
    describe('#constructor', () => {
        it('should have a suit, a rank, and a value', (done) => {
            /* Arrange not necessary because this is doing the creating of the card */
            /* Act/Invoke */
            let card = new Card('Clubs \u2663', '4', 4);
            /* Assertion */
            expect(card.suit).to.equal('Clubs \u2663');
            expect(card.rank).to.equal('4');
            expect(card.value).to.equal(4);
            done();
        });
    });

    // describe('#nameOfFunction', function() {
    //     it('should do something', function() {
    //         let y = functionName();
    //         expect(y).to.equal();
    //     });
    //     it('should throw an error if ', function() {
    //         expect(function() {
    //             functionName(badParams);
    //         }).to.throw(Error);
    //     });
    // });

});