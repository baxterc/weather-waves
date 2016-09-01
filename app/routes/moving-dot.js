import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    setCity(params) {
      window.location.href = '/dot-result/' + params.cityName;
    }
  }
});
