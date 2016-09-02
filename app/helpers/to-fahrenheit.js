import Ember from 'ember';

export function toFahrenheit(params) {
  var temp = params[0];
  return Math.floor(temp * (9/5) - 459.67);
}

export default Ember.Helper.helper(toFahrenheit);
