import Ember from 'ember';

export function windDirection(params) {
  var dir = params[0];
  var directions = ["N","NNE", "NNE", "NE", "NE", "ENE", "ENE", "E", "E", "ESE", "ESE", "SE", "SE", "SSE", "SSE", "S", "S", "SSW", "SSW", "SW", "SW", "WSW", "WSW", "W", "W", "WNW", "WNW", "NW", "NW", "NNW", "NNW", "N", "N"];
  return directions[Math.floor(dir/11.25)];
}

export default Ember.Helper.helper(windDirection);
