'use strict';

describe('Plane',function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff','isStormy']);
  });

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off at an airport', function() {
    plane.land(airport)
    plane.takeOff(airport)
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  });
  
});
