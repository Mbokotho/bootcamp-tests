describe('findItemsOver20', function(){

    it('should return all the names of items more than 20 ', function(){
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27}]
      ));

    });
    it('should return all the names of items more than 20 ', function(){
        assert.deepEqual([{"name":"pears","qty":30},{"name":"bananas","qty":28}], findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":30},{"name":"bananas","qty":28}]
      ));

    });

});
