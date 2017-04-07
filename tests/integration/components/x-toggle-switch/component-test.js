import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-toggle-switch', 'Integration | Component | x toggle switch', {
  integration: true
});

test('it renders', function(assert) {
  this.set('sendToggle', () => {});
  this.render(hbs`{{x-toggle-switch sendToggle=(action sendToggle)}}`);

  assert.equal(this.$().text().trim(), '');
});
