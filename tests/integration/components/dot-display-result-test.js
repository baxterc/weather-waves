import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dot-display-result', 'Integration | Component | dot display result', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dot-display-result}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dot-display-result}}
      template block text
    {{/dot-display-result}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
