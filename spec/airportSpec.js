'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpyObj('plane',['land']);
    weather = jasmine.createSpyObj('weather',['isStormy']);
    airport = new Airport(weather);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

describe('under normal conditions', function(){
  beforeEach(function(){
    weather.isStormy.and.returnValue(false);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for take off', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
});

  describe('when the weather is stormy', function() {
    beforeEach(function(){
      weather.isStormy.and.returnValue(true)
    });

    it('does not clear planes for take off', function() {
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError("cannot takeoff during storm");
    });
    it('does not clear planes for landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError("cannot land during storm");
    });
  });
});
