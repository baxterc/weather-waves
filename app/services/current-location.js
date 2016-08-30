import Ember from 'ember';

export default Ember.Service.extend({
  getLocation() {
    var that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      that.set('pos', pos);
    });
  }
});
