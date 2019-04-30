function Weather() {
}

function Airport(weather) {
  this.hangar = [];
  this.weather = weather;
}

function Plane() {
}


Weather.prototype._getRandomWeather = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Airport.prototype.land = function(plane) {
  if (this._isStormy() == true) {
    throw new Error("Can't land in stormy weather");
  } else {
    this.hangar.push(plane)
    return this.hangar;
  }
}

Airport.prototype.takeOff = function(plane) {
  if (this._isStormy() == true) {
    throw new Error("Can't take off in stormy weather");
  } else {
    var index = this.hangar.indexOf(plane);
    this.hangar.splice(index, 1);
    return this.hangar;
  }
}

Airport.prototype._isStormy = function() {
  var STORMYLIMIT = 7
  var currentWeather = this.weather._getRandomWeather(1, 10)

  if (currentWeather > STORMYLIMIT) {
    return true
  } else {
    return false
  }
}
