describe('Airport', function(){

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('land', function() {
    it('allows a plane to land', function(){
      expect(airport.land(plane)).toContain(plane)
    });
  });
});
