describe('Is it a weekday or weekend', function(){

    it('should tell wether its weekend or not', function(){
        assert.equal(isWeekday('Sunday'),false );
    });
    it('should tell wether  its weekend or not', function(){

        assert.equal(isWeekday('Tuesday'), true);
    });
});
