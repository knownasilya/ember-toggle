import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import emberVersionGTE from 'ember-test-helpers/has-ember-version';
import $ from 'jquery';

module('Integration | Component | x toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{x-toggle}}`);

    assert.ok(find('div.x-toggle-btn'), 'element exists');
  });

  test('changing disabled property disables component', async function(assert) {
    this.setProperties({
      value: false,
      disabled: true
    });

    await render(hbs`{{x-toggle
      value=value
      disabled=disabled
    }}`);

    assert.equal($('input.x-toggle').prop('disabled'), true);
    assert.equal(this.value, false);

    await click('div.x-toggle-btn');
    assert.equal($('input.x-toggle').prop('disabled'), true);
    assert.equal(this.value, false);
  });

  test('clicking component triggers onToggle action', async function(assert) {
    this.setProperties({
      myValue: false,
      onToggle(val) {
        this.set('myValue', val)
      }
    })

    await render(hbs`{{x-toggle
      value=myValue
      onToggle=(action onToggle)
    }}`);

    await click('div.x-toggle-btn');
    assert.equal(this.myValue, true, 'new value set');
  });

  test('clicking component labels triggers onToggle action', async function(assert) {
    let onTrue = true;

    this.setProperties({
      value: false,
      onToggle(val) {
        assert.equal(val, onTrue, 'new value set');
        onTrue = false;
        this.set('value', val);
      }
    });

    await render(hbs`{{x-toggle
      value=value
      showLabels=true
      onToggle=(action onToggle)
    }}`);

    await click('.on-label');
    assert.equal(this.value, true, 'clicking on label toggles value true');

    await click('.off-label');
    assert.equal(this.value, false, 'clicking off label toggles value to false');

    await click('.off-label');
    assert.equal(this.value, false, 'clicking off label again, value stays false');
  });

  test('clicking disabled component labels does not trigger onToggle action', async function(assert) {
    this.setProperties({
      value: false,
      disabled: true,
      onToggle(val) {
        this.set('value', val);
      }
    });

    await render(hbs`{{x-toggle
      value=value
      showLabels=true
      onToggle=(action onToggle)
      disabled=disabled
    }}`);

    await click('.on-label');
    assert.equal(this.value, false, 'clicking on label does not change the value');

    await click('.off-label');
    assert.equal(this.value, false, 'clicking off label does not change the value');
  });

  if (emberVersionGTE(2, 0)) {
    test('clicking component works with bespoke values and mut helper', async function(assert) {
      this.set('value', false);

      await render(hbs`{{x-toggle
        value=value
        offLabel='Foo'
        onLabel='Bar'
        showLabels=true
        onToggle=(action (mut value))
      }}`);
  
      assert.equal(this.value, false);
      assert.equal(find('.off-label').textContent.trim(), 'Foo', '"off" property set on toggle');
      assert.equal(find('.on-label').textContent.trim(), 'Bar', '"on" property set on toggle');

      await click('div.x-toggle-btn');
      assert.equal(this.value, true, 'click toggles value');
    });

    test('clicking component works with boolean true/false', async function(assert) {
      this.set('value', false);

      await render(hbs`{{x-toggle
        value=value
        onToggle=(action (mut value))
        onLabel=true
        offLabel=false
      }}`);

      assert.equal(this.value, false);

      await click('div.x-toggle-btn');
      assert.equal(this.value, true);
    });

    test('clicking component works with boolean true/false and discrete labels', async function(assert) {
      this.set('value', false);

      await render(hbs`{{x-toggle
        value=value
        onToggle=(action (mut value))
        onLabel='Yes'
        offLabel='No'
      }}`);

      assert.equal(this.value, false);

      await click('div.x-toggle-btn');
      assert.equal(this.value, true);
    });

    test('value can be set by changing the value property', async function(assert) {
      this.setProperties({
        value: false,
        show: false
      });

      await render(hbs`
        {{x-toggle value=value onToggle=(action (mut value))}}
      `);

      this.set('value', true);
      assert.equal(find('.x-toggle-container').classList.contains('x-toggle-container-checked'), true);

      this.set('value', false);
      assert.equal(find('.x-toggle-container').classList.contains('x-toggle-container-checked'), false);
    });

    test('can render in block form', async function(assert) {
      this.setProperties({
        value: false,
        show: false
      });

      await render(hbs`
        {{#x-toggle value=value showLabels=true onToggle=(action (mut value)) as |toggle|}}
          {{toggle.offLabel}}
          {{toggle.onLabel}}
          {{toggle.switch}}
        {{/x-toggle}}
      `);

      this.set('value', true);
      assert.equal(find('.x-toggle-container').classList.contains('x-toggle-container-checked'), true);

      this.set('value', false);
      assert.equal(find('.x-toggle-container').classList.contains('x-toggle-container-checked'), false);
    });

    test('onToggle not called unless value changes', async function(assert) {
      this.setProperties({
        timesCalled: 0,
        value: false,
        show: false,
        onToggle(value) {
          const timesCalled = this.get('timesCalled') + 1;
          this.set('timesCalled', timesCalled);
          this.set('value', value);
        }
      });

      await render(hbs`
        {{#x-toggle value=value showLabels=true onToggle=(action onToggle) as |toggle|}}
          {{toggle.offLabel}}
          {{toggle.onLabel}}
          {{toggle.switch}}
        {{/x-toggle}}
      `);

      await click('.on-label');
      assert.equal(this.value, true, 'clicking on label toggles value true');
      assert.equal(this.timesCalled, 1, 'should call onToggle once');

      await click('.on-label');
      assert.equal(this.value, true, 'clicking on label again stays true');
      assert.equal(this.timesCalled, 1, 'should not call onToggle again if value does not change');
    });

    test('swipe gestures', async function(assert) {
      this.set('value', false);

      await render(hbs`{{x-toggle
        value=value
        onToggle=(action (mut value))
      }}`);

      const $toggle = this.$('.x-toggle-container');

      $toggle.trigger('panright');
      assert.equal(this.value, true, 'panning right should enable');

      $toggle.trigger('panleft');
      assert.equal(this.value, false, 'panning left should disable');
    });

    test('swipe gesture while disabled', async function(assert) {
      this.set('value', false);

      await render(hbs`{{x-toggle
        disabled=true
        value=value
        onToggle=(action (mut value))
      }}`);

      const $toggle = this.$('.x-toggle-container');

      $toggle.trigger('panright');
      assert.equal(this.value, false, 'panning right should not enable');
    });

    test('clicking should not enable when the action does not update the value', async function(assert) {
      this.setProperties({
        value: false,
        toggleAction() {}
      });

      await render(hbs`{{x-toggle value=value onToggle=(action toggleAction)}}`);
      await click('div.x-toggle-btn');

      assert.equal(this.value, false);
      assert.notOk(this.$('.x-toggle').is(':checked'));
    });

    test('panning should not enable when the action does not update the value', async function(assert) {
      this.setProperties({
        value: false,
        toggleAction() {}
      });

      await render(hbs`{{x-toggle value=value onToggle=(action toggleAction)}}`);

      const $toggle = this.$('.x-toggle-container');

      $toggle.trigger('panright');

      assert.equal(this.value, false);
      assert.notOk(this.$('.x-toggle').is(':checked'));
    });
  }
});
