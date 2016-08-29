import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    logIt() {
      console.log(model.name);
    },
    reDraw() {
      this.sendAction('reDraw');
    }
  }
});
