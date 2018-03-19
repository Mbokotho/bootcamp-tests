describe('How many years Ago', function(){

    it('should say how many years ago', function(){
        assert.equal(yearsAgo(2006),12);
    });
    it('should say how many years ago', function(){

        assert.equal(yearsAgo(1992),26);
    });
});
