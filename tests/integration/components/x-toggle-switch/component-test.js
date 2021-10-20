import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x toggle switch', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.sendToggle = () => {};
    await render(hbs`
      <XToggleSwitch
        @sendToggle={{this.sendToggle}}
      />
    `);

    assert.dom('*').hasText('');
  });
});
