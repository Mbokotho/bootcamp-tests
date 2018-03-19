describe('Hello neighbour', function(){

    it('should greet Lwando correctly', function(){
        assert.equal('Hello, Lwando', greet('Lwando'));
    });
    it('should greet Londiwe correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Londy', greet('Londy'));
    });
});
