import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x toggle label', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{x-toggle-label label='test' value=true switchId='test' show=true}}`);

    assert.dom('*').hasText('test');
  });

  test('it renders in block form', async function(assert) {
    await render(hbs`
      {{#x-toggle-label label='test' value=true switchId='test' show=true as |value|}}
        hi {{value}}
      {{/x-toggle-label}}
    `);

    assert.dom('*').hasText('hi test');
  });
});
