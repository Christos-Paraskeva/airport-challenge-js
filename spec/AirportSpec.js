'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    // hanger = [];
    // airport.isStormy = function () { return true };
  });

  it('confirms weather is stormy', function() {
    spyOn(airport, 'weatherGenerator').and.returnValue(true)
    // console.log(airport.weatherGenerator())
    // console.log(airport.weatherGenerator())
    // console.log(airport.weatherGenerator())
    // console.log(weatherGenerator)
    expect(airport.isStormy(airport.weatherGenerator())).toBe(true)
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
