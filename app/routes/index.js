import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.get('currentCity') + ',840&cnt=16&appid=47c99ae9b1f7f7412bba0f762a2b3c68';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON;
    });
  },

  currentCity: "Scottsdale",

  actions: {
    getLoc: function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    },

    setCity(params) {
      this.transitionTo('dot-result', params.cityName);

    }

  }
});
