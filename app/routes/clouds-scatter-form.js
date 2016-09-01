import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    setCity(params) {
      this.transitionTo('clouds-humidity-scatter', params.cityName);
    }
  }
});
