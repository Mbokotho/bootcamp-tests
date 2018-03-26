describe('Fromwhere ', function(){

    it('should state the car is from cape town', function(){
        assert.equal( fromWhere('CA'), 'Cape Town');
    });
    it('should state the car is from Paarl', function(){

        assert.equal( fromWhere('CJ'),'Paarl');
    });
});
