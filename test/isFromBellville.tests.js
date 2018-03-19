


    describe('return true if vehicle isFromBellville else return false', function(){

        it('should indentify car correctly', function(){
            assert.equal(isFromBellville('CY4666'),true);
        });
        it('should identify car correctly', function(){

            assert.equal(isFromBellville('CF444'),false);
        });
    });
