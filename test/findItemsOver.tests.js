describe('findItemsOver', function(){

    it('should return all the names of items more than ', function(){
        assert.deepEqual([], findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27}]
      ));
    });


});
