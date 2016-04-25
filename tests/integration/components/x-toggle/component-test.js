import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-toggle', 'Integration | Component | x toggle', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-toggle}}`);

  assert.equal(this.$().find('label').length, 1);
});

test('changing disabled has effect on component', function(assert) {
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
  }}`);
  this.set('myValue', 'on'); // trigger a toggle
  setTimeout(() => {
    assert.equal(true, false, 'timed out waiting for toggle');
    done();
  }, 500);
});
