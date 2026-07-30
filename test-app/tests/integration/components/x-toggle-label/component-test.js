import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | x toggle label', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <XToggleLabel
        @label='test'
        @value={{true}}
        @switchId='test'
        @show={{true}}
      />
    `);

    assert.dom('*').hasText('test');
  });

  test('it renders in block form', async function (assert) {
    await render(hbs`
      <XToggleLabel
        @label='test'
        @value={{true}}
        @switchId='test'
        @show={{true}}
        as |value|
      >
        hi {{value}}
      </XToggleLabel>
    `);

    assert.dom('*').hasText('hi test');
  });
});
