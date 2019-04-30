describe('Airport', function(){

  beforeEach(function() {
    weather = new Weather();
    airport = new Airport(weather);
    plane = new Plane();
  });

  describe('land', function() {
    it('allows a plane to land', function(){
      spyOn(weather,'_getRandomWeather').and.returnValue(2);
      expect(airport.land(plane)).toContain(plane);
    });

    it('prevents landing in stormy weather', function() {
      spyOn(weather,'_getRandomWeather').and.returnValue(8);
      expect(function() {airport.land(plane)}).toThrowError("Can't land in stormy weather");
    });
  });

  describe('takeOff', function() {
    it('allows a plane to take off', function(){
      spyOn(weather,'_getRandomWeather').and.returnValue(2);

      airport.land(plane);
      expect(airport.takeOff(plane)).not.toContain(plane);
    });

    it('prevents take off in stormy weather', function() {
      airport.hangar.push(plane);

      spyOn(weather,'_getRandomWeather').and.returnValue(8);

      expect(function() { airport.takeOff(plane)}).toThrowError("Can't take off in stormy weather");
    });
  });

});
