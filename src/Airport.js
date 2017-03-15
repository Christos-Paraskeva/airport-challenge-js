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
  return hanger;
};

Airport.prototype.availablePlane = function() {
  if (hanger.length > 0) {
    return true;
  }
  else {
    return false;
  }
};

Airport.prototype.weatherGenerator = function () {
  return Math.random() > 0.2;
};

Airport.prototype.isStormy = function(weatherGenerator) {
  return weatherGenerator
};
