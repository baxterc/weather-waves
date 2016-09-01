import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + params.cityName + ",840&cnt=16&appid=47c99ae9b1f7f7412bba0f762a2b3c68";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON;
    });
  },

  actions: {
    setCity(params) {
      // this.transitionTo('dot-result', params.cityName);
      window.location.href = '/dot-result/' + params.cityName;
    }
  }
});
