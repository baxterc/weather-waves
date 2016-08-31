import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    setCity(params) {
      this.transitionTo('dot-result', params.cityName);
    }
  }
});
