import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + params.cityName + ",840&appid=47c99ae9b1f7f7412bba0f762a2b3c68";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      // console.log(responseJSON);
      return responseJSON;
    });
  },

  actions: {
    setCity(params) {
      window.location.href = '/clouds-humidity-scatter/' + params.cityName;
    }
  }
});
