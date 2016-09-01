import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    setCity(params) {
      window.location.href = '/clouds-humidity-scatter/' + params.cityName;
    }
  }
});
