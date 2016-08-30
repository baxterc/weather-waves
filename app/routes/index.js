import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=SanDiego&appid=47c99ae9b1f7f7412bba0f762a2b3c68';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      console.log(responseJSON.wind.deg);
      return responseJSON;
    });
  },

  // currentWeather: Ember.inject.service(),

  actions: {
    getLoc: function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        return {lat: position.coords.latitude, long: position.coords.longitude};
      });
    },

  }
});
