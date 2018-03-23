describe('Fromwhere ', function(){

    it('should tell where the car is from cape town', function(){
        assert.equal( fromWhere('CA'), 'Cape Town');
    });
    it('should tell where the car is from', function(){

        assert.equal( fromWhere('ytg'),'Some other place!');
    });
});
