function Airport() {
  this.hangar = []
}

function Plane() {
}

Airport.prototype.land = function (plane) {
  this.hangar.push(plane)
  return this.hangar;
};
