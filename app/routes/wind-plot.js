import Ember from 'ember';

export default Ember.Route.extend({
  // *** This gets the user's current location and sets it as a parameter of an API call to get the weather where they are, but does not work due to synchronicity ***
  // model: function() {
  //   return navigator.geolocation.getCurrentPosition(function(position) {
  //     return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=47c99ae9b1f7f7412bba0f762a2b3c68').then(function(responseJSON) {
  //       console.log(responseJSON);
  //       return responseJSON;
  //     })
  //   });
  // },

  // *** This gets the weather for a set location in Portland ***
  model: function() {
    return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=45.5205043&lon=-122.70734900000001&appid=47c99ae9b1f7f7412bba0f762a2b3c68').then(function(responseJSON) {
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
      console.log(params.name);
      this.transitionTo('city', params);
    },
  }
});

//http://api.openweathermap.org/data/2.5/weather?lat=45.5205043&lon=-122.70734900000001&appid=47c99ae9b1f7f7412bba0f762a2b3c68
