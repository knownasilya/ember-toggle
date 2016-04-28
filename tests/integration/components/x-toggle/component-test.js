import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
const { run } = Ember;


moduleForComponent('x-toggle', 'Integration | Component | x toggle', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-toggle}}`);

  assert.equal(this.$().find('label').length, 1);
});

test('changing disabled property disables component', function(assert) {
  this.set('disabled', true);
  this.render(hbs`{{x-toggle
    value='off'
    disabled=disabled
  }}`);
  assert.equal($('input.x-toggle').prop('disabled'), true);
});

test('changing container\'s value changes toggled state', function(assert) {
  const done = assert.async();
  this.set('myValue', 'off');
  this.on('onToggle', function(hash) {
    this.set('myValue', hash.newValue);

    assert.equal(hash.code, 'toggled', 'onToggle code is a toggle event, not a suggestion');
    assert.equal(hash.oldValue, 'off', 'hash value had been in "off" state');
    assert.equal(hash.newValue, 'on', 'but has been toggled to "on" state');
    done();
  });
  this.render(hbs`{{x-toggle
    value=myValue
    onToggle=(action 'onToggle')
    onValue='On:on'
    offValue='Off:off'
  }}`);
  this.set('myValue', 'on'); // trigger a toggle
  setTimeout(() => {
    assert.equal(true, false, 'timed out waiting for toggle');
    done();
  }, 500);
});

test('changing container\'s value to invalid state prompts "suggestion"', function(assert) {
  const done = assert.async();
  this.on('onToggle', (hash) => {
    this.set('myValue', hash.newValue);

    assert.equal(hash.code, 'suggestion', 'onToggle code is a suggestion');
    assert.equal(hash.oldValue, 'foobar', 'hash value had been in an invalid state');
    assert.equal(hash.newValue, 'off', 'suggested new state is the "off" state');
    done();

    return true;
  });
  this.render(hbs`{{x-toggle
    value='foobar'
    onToggle=(action 'onToggle')
    onValue='On:on'
    offValue='Off:off'
  }}`);

  setTimeout(() => {
    assert.equal(true, false, 'timed out waiting for suggestion');
    done();
  }, 1000);
});

test('rejecting "suggestion" disables component', function(assert) {
  const done = assert.async();
  this.on('onToggle', (hash) => {
    assert.equal(hash.code, 'suggestion', 'onToggle code is a suggestion');
    assert.equal(hash.oldValue, 'foobar', 'hash value had been in an invalid state');
    assert.equal(hash.newValue, 'off', 'suggested new state is the "off" state');

    this.set('done', true);
    done();

    return false; // reject suggestion
  });
  this.render(hbs`{{x-toggle
    value='foobar'
    onToggle=(action 'onToggle')
    onValue='On:on'
    offValue='Off:off'
  }}`);

  setTimeout(() => {
    if(!this.get('done')) {
      assert.equal(true, false, 'timed out waiting for suggestion');
      done();
    }
  }, 1000);
});

test('clicking component toggles state (using "on"/"off" states)', function(assert) {
  this.set('myValue', 'Off');
  this.render(hbs`{{x-toggle
    value=myValue
    offValue='Off'
    onValue='On'
    onToggle=(mut myValue)
  }}`);
  assert.equal(this.get('myValue'), 'Off');
  this.$('.x-toggle-component label').click();
  run.next(() => {
    assert.equal(this.get('myValue'), 'On');
  });
});

test('clicking component toggles state (using boolean states)', function(assert) {
  this.set('value', false);
  this.render(hbs`{{x-toggle
    value=value
    onToggle=(mut value)
    onValue='On:true'
    offValue='Off:false'
  }}`);
  assert.equal(this.get('value'), false);
  this.$('.x-toggle-component label').click();
  assert.equal(this.get('value'), true);
});
