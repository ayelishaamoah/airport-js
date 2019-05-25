'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal conditions', function() {
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });
    // So I can get passengers to a destination
    // I want to instruct a plane to land at an airport
    it('planes can be instructed to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

  //   As an air traffic controller
  // So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

    it('planes can be instructed to takeoff from an airport', function() {
      plane.land(airport)
      plane.takeOff(airport);
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('under stormy conditions', function(){
    // As an air traffic controller
    // To ensure safety
    // I want to prevent takeoff when weather is stormy
    it('prevents take off in stormy weather', function() {
      spyOn(Math,'random').and.returnValue(0)
      plane.land(airport)
      spyOn(airport._weather,'isStormy').and.returnValue(true)
      expect(function(){ plane.takeOff(airport)}).toThrowError("cannot takeoff during storm");
      expect(airport.planes()).toContain(plane);
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when weather is stormy
    it('prevents landing  in stormy weather', function() {
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ plane.land(airport);}).toThrowError("cannot land during storm");
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
