import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('clouds-scatter-display', 'Integration | Component | clouds scatter display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{clouds-scatter-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#clouds-scatter-display}}
      template block text
    {{/clouds-scatter-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
