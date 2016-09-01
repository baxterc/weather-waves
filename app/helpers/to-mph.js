import Ember from 'ember';

export function toMph(params) {
  var speed = params[0];
  return Math.floor(speed * 2.2369);
}

export default Ember.Helper.helper(toMph);
