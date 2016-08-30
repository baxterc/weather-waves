import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD
  // model: function() {
  //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=47c99ae9b1f7f7412bba0f762a2b3c68';
  //   return Ember.$.getJSON(url).then(function(responseJSON) {
  //     return responseJSON;
  //   });
  // },
  actions: {
    getLoc: function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    },

=======
  model() {
    var key = config.apiKey;
    var url = "http://api.openweathermap.org/data/2.5/forecast?q=Portland,us&mode=json&appid=" + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON;
    });
>>>>>>> chip
  }
});
