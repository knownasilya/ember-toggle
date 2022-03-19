import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import emberVersionGTE from 'ember-test-helpers/has-ember-version';
import { pan } from 'ember-gesture-modifiers/test-support';

module('Integration | Component | x toggle', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <XToggle/>
    `);

    assert.dom(this.element).exists();
  });

  test('changing disabled property disables component', async function (assert) {
    this.setProperties({
      value: false,
      disabled: true,
    });

    await render(hbs`
      <XToggle
        @value={{this.value}}
        @disabled={{this.disabled}}
      />
    `);

    assert.dom('.x-toggle').isDisabled();
    assert.false(this.value);

    await click('.x-toggle-btn');
    assert.dom('.x-toggle').isDisabled();
    assert.false(this.value);
  });

  test('clicking component triggers onToggle action', async function (assert) {
    this.setProperties({
      myValue: false,
      onToggle: (val) => {
        this.set('myValue', val);
      },
    });

    await render(hbs`
      <XToggle
        @value={{this.myValue}}
        @onToggle={{this.onToggle}}
      />
    `);

    await click('.x-toggle-btn');
    assert.true(this.myValue, 'new value set');
  });

  test('clicking component labels triggers onToggle action', async function (assert) {
    assert.expect(5);

    let onTrue = true;

    this.setProperties({
      value: false,
      onToggle: (val) => {
        assert.strictEqual(val, onTrue, 'new value set');
        onTrue = false;
        this.set('value', val);
      },
    });

    await render(hbs`
      <XToggle
        @value={{this.value}}
        @showLabels={{true}}
        @onToggle={{this.onToggle}}
      />
    `);

    await click('.on-label');
    assert.true(this.value, 'clicking on label toggles value true');

    await click('.off-label');
    assert.false(this.value, 'clicking off label toggles value to false');

    await click('.off-label');
    assert.false(this.value, 'clicking off label again, value stays false');
  });

  test('clicking disabled component labels does not trigger onToggle action', async function (assert) {
    this.setProperties({
      value: false,
      disabled: true,
      onToggle: (val) => {
        this.set('value', val);
      },
    });

    await render(hbs`
      <XToggle
        @showLabels={{true}}
        @disabled={{this.disabled}}
        @value={{this.value}}
        @onToggle={{this.onToggle}}
      />
    `);

    await click('.on-label');
    assert.false(this.value, 'clicking on label does not change the value');

    await click('.off-label');
    assert.false(this.value, 'clicking off label does not change the value');
  });

  if (emberVersionGTE(2, 0)) {
    test('clicking component works with bespoke values and mut helper', async function (assert) {
      this.set('value', false);

      await render(hbs`
        <XToggle
          @offLabel='Foo'
          @onLabel='Bar'
          @showLabels={{true}}
          @value={{this.value}}
          @onToggle={{fn (mut this.value)}}
        />
      `);

      assert.false(this.value);
      assert.dom('.off-label').hasText('Foo', '"off" property set on toggle');
      assert.dom('.on-label').hasText('Bar', '"on" property set on toggle');

      await click('.x-toggle-btn');
      assert.true(this.value, 'click toggles value');
    });

    test('clicking component works with boolean true/false', async function (assert) {
      this.set('value', false);

      await render(hbs`
        <XToggle
          @onLabel={{true}}
          @offLabel={{false}}
          @value={{this.value}}
          @onToggle={{fn (mut this.value)}}
        />
      `);

      assert.false(this.value);

      await click('.x-toggle-btn');
      assert.true(this.value);
    });

    test('clicking component works with boolean true/false and discrete labels', async function (assert) {
      this.set('value', false);

      await render(hbs`
        <XToggle
          @onLabel='Yes'
          @offLabel='No'
          @value={{this.value}}
          @onToggle={{fn (mut this.value)}}
        />
      `);

      assert.false(this.value);

      await click('.x-toggle-btn');
      assert.true(this.value);
    });

    test('value can be set by changing the value property', async function (assert) {
      this.setProperties({
        value: false,
        show: false,
      });

      await render(hbs`
        <XToggle
          @value={{this.value}}
          @onToggle={{fn (mut this.value)}}
        />
      `);

      this.set('value', true);
      assert.dom('.x-toggle-container').hasClass('x-toggle-container-checked');

      this.set('value', false);
      assert
        .dom('.x-toggle-container')
        .doesNotHaveClass('x-toggle-container-checked');
    });

    test('can render in block form', async function (assert) {
      this.setProperties({
        value: false,
        show: false,
      });

      await render(hbs`
        <XToggle
          @showLabels={{true}}
          @value={{this.value}}
          @onToggle={{fn (mut this.value)}}
        as |toggle|>
          <toggle.offLabel/>
          <toggle.onLabel/>
          <toggle.switch/>
        </XToggle>
      `);

      this.set('value', true);
      assert.dom('.x-toggle-container').hasClass('x-toggle-container-checked');

      this.set('value', false);
      assert
        .dom('.x-toggle-container')
        .doesNotHaveClass('x-toggle-container-checked');
    });

    test('onToggle not called unless value changes', async function (assert) {
      this.setProperties({
        timesCalled: 0,
        value: false,
        show: false,
        onToggle: (value) => {
          const timesCalled = this.timesCalled + 1;
          this.set('timesCalled', timesCalled);
          this.set('value', value);
        },
      });

      await render(hbs`
        <XToggle
          @showLabels={{true}}
          @value={{this.value}}
          @onToggle={{this.onToggle}}
        as |toggle|>
          <toggle.offLabel/>
          <toggle.onLabel/>
          <toggle.switch/>
        </XToggle>
      `);

      await click('.on-label');
      assert.true(this.value, 'clicking on label toggles value true');
      assert.strictEqual(this.timesCalled, 1, 'should call onToggle once');

      await click('.on-label');
      assert.true(this.value, 'clicking on label again stays true');
      assert.strictEqual(
        this.timesCalled,
        1,
        'should not call onToggle again if value does not change'
      );
    });

    test('swipe gestures', async function (assert) {
      this.set('value', false);

      await render(hbs`
        <XToggle
          @value={{this.value}}
          @onToggle={{fn (mut this.value)}}
        />
      `);

      await pan('.x-toggle-container', 'right');
      assert.true(this.value, 'panning right should enable');

      await pan('.x-toggle-container', 'left');
      assert.false(this.value, 'panning left should disable');
    });

    test('swipe gesture while disabled', async function (assert) {
      this.set('value', false);

      await render(hbs`
        <XToggle
          @disabled={{true}}
          @value={{this.value}}
          @onToggle={{fn (mut this.value)}}
        />
      `);

      await pan('.x-toggle-container', 'right');
      assert.false(this.value, 'panning right should not enable');
    });

    test('clicking should not enable when the action does not update the value', async function (assert) {
      this.setProperties({
        value: false,
        toggleAction() {},
      });

      await render(hbs`
        <XToggle
          @value={{this.value}}
          @onToggle={{this.toggleAction}}
        />
      `);
      await click('.x-toggle-btn');

      assert.false(this.value);
      assert.dom('.x-toggle').isNotChecked();
    });

    test('panning should not enable when the action does not update the value', async function (assert) {
      this.setProperties({
        value: false,
        toggleAction() {},
      });

      await render(hbs`
        <XToggle
          @value={{this.value}}
          @onToggle={{this.toggleAction}}
        />
      `);

      await pan('.x-toggle-container', 'right');

      assert.false(this.value);
      assert.dom('.x-toggle').isNotChecked();
    });
  }
});
