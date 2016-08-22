var expect = require('expect.js');
   var expected, current, expected1;
   before(function(){
     expected = ['a', 'b', 'c'];
       expected1 = ['d', 'a', 'b'];
   })
   describe('String#split', function(){
     beforeEach(function(){
       current = 'a,b,c'.split(',');
     })
     it('should return an array', function(){
       expect(Array.isArray(current)).to.be.true;
     });

   it('should return the same array', function(){
     expect(expected.length).to.equal(current.length);
     for (var i=0; i<expected.length; i++) {
       expect(expected[i]).equal(current[i]);
     }
   });
   
   it('should fail', function(){
       for (var i=0; i<expected.length; i++) {
       expect(expected[i]).equal(expected1[i]);
     }
   });
 })