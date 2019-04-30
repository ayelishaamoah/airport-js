describe('Airport', function(){

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('land', function() {
    it('allows a plane to land', function(){
      expect(airport.land(plane)).toContain(plane);
    });
  });

  describe('takeOff', function() {
    it('allows a plane to take off', function(){
      airport.land(plane);
      expect(airport.takeOff(plane)).not.toContain(plane);
    });
  });
});
