import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import emberVersionGTE from 'ember-test-helpers/has-ember-version';
import $ from 'jquery';

moduleForComponent('x-toggle', 'Integration | Component | x toggle', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-toggle}}`);

  assert.equal(this.$().find('div.x-toggle-btn').length, 1);
});

test('changing disabled property disables component', function(assert) {
  this.set('disabled', true);
  this.set('value', false);
  this.render(hbs`{{x-toggle
    value=value
    disabled=disabled
  }}`);
  assert.equal($('input.x-toggle').prop('disabled'), true);
  assert.equal(this.get('value'), false);
  this.$('div.x-toggle-btn').click();
  assert.equal($('input.x-toggle').prop('disabled'), true);
  assert.equal(this.get('value'), false);
});

test('clicking component triggers onToggle action', function(assert) {
  this.set('myValue', false);
  this.set('onToggle', val => this.set('myValue', val));
  this.render(hbs`{{x-toggle
    value=myValue
    onToggle=(action onToggle)
  }}`);
  this.$('div.x-toggle-btn').click();
  assert.equal(this.get('myValue'), true, 'new value set');
});

test('clicking component labels triggers onToggle action', function(assert) {
  let onTrue = true;

  this.set('value', false);
  this.set('onToggle', val => {
    assert.equal(val, onTrue, 'new value set');
    onTrue = false;
    this.set('value', val);
  });

  this.render(hbs`{{x-toggle
    value=value
    showLabels=true
    onToggle=(action onToggle)
  }}`);

  this.$('.on-label').click();
  assert.equal(this.get('value'), true, 'clicking on label toggles value true');

  this.$('.off-label').click();
  assert.equal(this.get('value'), false, 'clicking off label toggles value to false');

  this.$('.off-label').click();
  assert.equal(this.get('value'), false, 'clicking off label again, value stays false');
});

test('clicking disabled component labels does not trigger onToggle action', function(assert) {
  this.set('value', false);
  this.set('disabled', true);
  this.set('onToggle', val => {
    this.set('value', val);
  });

  this.render(hbs`{{x-toggle
    value=value
    showLabels=true
    onToggle=(action onToggle)
    disabled=disabled
  }}`);

  this.$('.on-label').click();
  assert.equal(this.get('value'), false, 'clicking on label does not change the value');

  this.$('.off-label').click();
  assert.equal(this.get('value'), false, 'clicking off label does not change the value');
});

if (emberVersionGTE(2, 0)) {
  test('clicking component works with bespoke values and mut helper', function(assert) {
    this.set('value', false);
    this.render(hbs`{{x-toggle
      value=value
      offLabel='Foo'
      onLabel='Bar'
      showLabels=true
      onToggle=(action (mut value))
    }}`);
    assert.equal(this.get('value'), false);
    assert.equal(this.$('.off-label').text().trim(), 'Foo', '"off" property set on toggle');
    assert.equal(this.$('.on-label').text().trim(), 'Bar', '"on" property set on toggle');
    this.$('div.x-toggle-btn').click();
    assert.equal(this.get('value'), true, 'click toggles value');
  });

  test('clicking component works with boolean true/false', function(assert) {
    this.set('value', false);
    this.render(hbs`{{x-toggle
      value=value
      onToggle=(action (mut value))
      onLabel=true
      offLabel=false
    }}`);
    assert.equal(this.get('value'), false);
    this.$('div.x-toggle-btn').click();
    assert.equal(this.get('value'), true);
  });

  test('clicking component works with boolean true/false and discrete labels', function(assert) {
    this.set('value', false);
    this.render(hbs`{{x-toggle
      value=value
      onToggle=(action (mut value))
      onLabel='Yes'
      offLabel='No'
    }}`);
    assert.equal(this.get('value'), false);
    this.$('div.x-toggle-btn').click();
    assert.equal(this.get('value'), true);
  });

  test('value can be set by changing the value property', function(assert) {
    this.set('value', false);
    this.set('show', false);

    this.render(hbs`
      {{x-toggle value=value onToggle=(action (mut value))}}
    `);

    this.set('value', true);
    assert.equal(this.$('.x-toggle-container').hasClass('x-toggle-container-checked'), true);

    this.set('value', false);
    assert.equal(this.$('.x-toggle-container').hasClass('x-toggle-container-checked'), false);
  });

  test('can render in block form', function(assert) {
    this.set('value', false);
    this.set('show', false);

    this.render(hbs`
      {{#x-toggle value=value showLabels=true onToggle=(action (mut value)) as |toggle|}}
        {{toggle.offLabel}}
        {{toggle.onLabel}}
        {{toggle.switch}}
      {{/x-toggle}}
    `);

    this.set('value', true);
    assert.equal(this.$('.x-toggle-container').hasClass('x-toggle-container-checked'), true);

    this.set('value', false);
    assert.equal(this.$('.x-toggle-container').hasClass('x-toggle-container-checked'), false);
  });

  test('onToggle not called unless value changes', function(assert) {
    this.set('timesCalled', 0);
    this.on('onToggle', (value) => {
      const timesCalled = this.get('timesCalled') + 1;
      this.set('timesCalled', timesCalled);
      this.set('value', value);
    });

    this.set('value', false);
    this.set('show', false);

    this.render(hbs`
      {{#x-toggle value=value showLabels=true onToggle=(action 'onToggle') as |toggle|}}
        {{toggle.offLabel}}
        {{toggle.onLabel}}
        {{toggle.switch}}
      {{/x-toggle}}
    `);

    this.$('.on-label').click();
    assert.equal(this.get('value'), true, 'clicking on label toggles value true');
    assert.equal(this.get('timesCalled'), 1, 'should call onToggle once');
    this.$('.on-label').click();
    assert.equal(this.get('value'), true, 'clicking on label again stays true');
    assert.equal(this.get('timesCalled'), 1, 'should not call onToggle again if value does not change');
  });

  test('swipe gestures', function(assert) {
    this.set('value', false);

    this.render(hbs`{{x-toggle
      value=value
      onToggle=(action (mut value))
    }}`);

    const $toggle = this.$('.x-toggle-container');

    $toggle.trigger('panright');
    assert.equal(this.get('value'), true, 'panning right should enable');

    $toggle.trigger('panleft');
    assert.equal(this.get('value'), false, 'panning left should disable');
  });

  test('swipe gesture while disabled', function(assert) {
    this.set('value', false);

    this.render(hbs`{{x-toggle
      disabled=true
      value=value
      onToggle=(action (mut value))
    }}`);

    const $toggle = this.$('.x-toggle-container');

    $toggle.trigger('panright');
    assert.equal(this.get('value'), false, 'panning right should not enable');
  });

  test('clicking should not enable when the action does not update the value', function(assert) {
    this.set('value', false);
    this.set('toggleAction', () => {})

    this.render(hbs`{{x-toggle value=value onToggle=(action toggleAction)}}`);
    this.$('div.x-toggle-btn').click();

    assert.equal(this.get('value'), false);
    assert.notOk(this.$('.x-toggle').is(':checked'));
  });

  test('panning should not enable when the action does not update the value', function(assert) {
    this.set('value', false);
    this.set('toggleAction', () => {})

    this.render(hbs`{{x-toggle value=value onToggle=(action toggleAction)}}`);

    const $toggle = this.$('.x-toggle-container');

    $toggle.trigger('panright');

    assert.equal(this.get('value'), false);
    assert.notOk(this.$('.x-toggle').is(':checked'));
  });
}
