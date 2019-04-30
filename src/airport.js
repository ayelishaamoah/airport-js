function Airport() {
  this.hangar = [];
}

function Plane() {
}

Airport.prototype.land = function(plane) {
  this.hangar.push(plane)
  return this.hangar;
}

Airport.prototype.takeOff = function(plane) {
  var index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1);
  return this.hangar;
}
