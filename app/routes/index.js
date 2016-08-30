import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var key = config.apiKey;
    var url = "http://api.openweathermap.org/data/2.5/forecast?q=Portland,us&mode=json&appid=" + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON;
    });
  },
  actions: {
    getLoc: function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    }
  }
});
