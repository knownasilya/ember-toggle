import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x toggle switch', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('sendToggle', () => {});
    await render(hbs`{{x-toggle-switch sendToggle=(action sendToggle)}}`);

    assert.equal(find('*').textContent.trim(), '');
  });
});
