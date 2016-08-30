import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('city-lookup', 'Integration | Component | city lookup', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{city-lookup}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#city-lookup}}
      template block text
    {{/city-lookup}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
