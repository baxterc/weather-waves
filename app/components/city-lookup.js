import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setCity() {
      var params = {
        cityName: this.get('cityName')
      };
      this.sendAction('setCity', params);
      console.log(params);
    }
  }
});
