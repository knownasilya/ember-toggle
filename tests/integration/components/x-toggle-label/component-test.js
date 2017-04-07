import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-toggle-label', 'Integration | Component | x toggle label', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-toggle-label label='test' value=true switchId='test' show=true}}`);

  assert.equal(this.$().text().trim(), 'test');
});

test('it renders in block form', function(assert) {
  this.render(hbs`
    {{#x-toggle-label label='test' value=true switchId='test' show=true as |value|}}
      hi {{value}}
    {{/x-toggle-label}}
  `);

  assert.equal(this.$().text().trim(), 'hi test');
});
