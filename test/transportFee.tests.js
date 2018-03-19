describe('Which shift', function(){

    it('should tell how much to pay', function(){
        assert.equal(transportFee('morning'),'R20');
    });
    it('should tell hiow much to pay', function(){

        assert.equal(transportFee('afternoon'),'R10');
    });
});
