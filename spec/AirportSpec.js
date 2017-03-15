'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('returns true if the weather is stormy', function() {
    //Would like to double the weather class instead of creating an instance
    var weather = new Weather();
    spyOn(weather,'generator').and.returnValue(true);
    expect(airport.isStormy(weather)).toEqual(true);
  });

  it('returns false if the weather is not stormy', function() {
    var weather = new Weather();
    spyOn(weather,'generator').and.returnValue(false);
    expect(airport.isStormy(new Weather())).toEqual(false);
  });

  it('planes can be instructed to land at the airport', function() {
    expect(airport.landPlane(plane)).toEqual([plane])
  });

  it('plane can be instructed to take off from airport', function() {
    airport.landPlane(plane)
    airport.landPlane(plane)
    airport.landPlane(plane)
    expect(airport.takeOff()).toEqual([plane, plane])
  });

  it('confirms there is an available plane for takeoff', function() {
    airport.landPlane(plane)
    expect(airport.availablePlane()).toBe(true)
  });

});
