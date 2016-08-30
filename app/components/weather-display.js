import Ember from 'ember';

export default Ember.Component.extend({
  currentWeather: Ember.inject.service(),

  actions: {
    logIt() {
      console.log(this.get('model.name'));
    },
    reDraw() {
      this.sendAction('reDraw');
    }
  }
});
