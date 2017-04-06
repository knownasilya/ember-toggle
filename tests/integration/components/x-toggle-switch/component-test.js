import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-toggle-switch', 'Integration | Component | x toggle switch', {
  integration: true
});

test('it renders', function(assert) {
  this.set('onClick', () => {});
  this.set('onChangeValue', () => {});
  this.render(hbs`{{x-toggle-switch onClick=(action onClick) onChangeValue=(action onChangeValue)}}`);

  assert.equal(this.$().text().trim(), '');
});
