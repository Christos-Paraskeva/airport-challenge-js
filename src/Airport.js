Airport = function() {
  this.hanger = [];
};

var Plane = function() {};
// var hanger = []
var plane = new Plane();
// plane = new Plane();

Airport.prototype.landPlane = function(plane) {
  this.hanger.push(plane)
  return this.hanger
};

Airport.prototype.takeOff = function() {
  this.hanger.pop();
  return this.hanger;
};

Airport.prototype.availablePlane = function() {
  if (this.hanger.length > 0) {
    return true;
  }
  else {
    return false;
  }
};

Airport.prototype.isStormy = function(weather) {
  return weather.generator();
};
