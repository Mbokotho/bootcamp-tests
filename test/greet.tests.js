describe('greet', function(){

    it('should greet Lwando correctly', function(){
        assert.equal('Hello, Lwando', greet('Lwando'));
    });
    it('should greet Londiwe correctly', function(){

        assert.equal('Hello, Londy', greet('Londy'));
    });
});
