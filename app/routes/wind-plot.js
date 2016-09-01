import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function() {
    var key = '3ff186dd27c97ee3d6c3ae983911835b';
    return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=45.5205043&lon=-122.70734900000001&appid=' + key).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON;
    });
  },

  actions: {
    getLoc: function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        return {lat: position.coords.latitude, long: position.coords.longitude};
      });
    },

    citySearch: function(params){
      this.transitionTo('city', params.name);
    },
  }
});

//http://api.openweathermap.org/data/2.5/weather?lat=45.5205043&lon=-122.70734900000001&appid=47c99ae9b1f7f7412bba0f762a2b3c68
