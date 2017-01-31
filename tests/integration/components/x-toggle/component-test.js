import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import emberVersionGTE from 'ember-test-helpers/has-ember-version';

moduleForComponent('x-toggle', 'Integration | Component | x toggle', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-toggle}}`);

  assert.equal(this.$().find('div.x-toggle-btn').length, 1);
});

test('changing disabled property disables component', function(assert) {
  this.set('disabled', true);
  this.render(hbs`{{x-toggle
    value='off'
    disabled=disabled
  }}`);
  assert.equal($('input.x-toggle').prop('disabled'), true);
});

test('clicking component triggers onToggle action', function(assert) {
  const done = assert.async();
  this.set('myValue', 'off');
  this.on('onToggle', hash => {
    assert.equal(hash.code, 'toggled', 'onToggle code is toggle');
    assert.equal(hash.oldValue, 'off', 'proper old value');
    assert.equal(hash.newValue, 'on', 'proper new value');

    this.set('completed', true);
    done();
  });
  this.render(hbs`{{x-toggle
    value=myValue
    onToggle=(action 'onToggle')
  }}`);
  this.$('div.x-toggle-btn').click();

  setTimeout(() => {
    if(!this.get('completed')) {
      assert.equal(true, false, 'timed out waiting for toggle event');
      done();
    }
  }, 1000);

});

if (emberVersionGTE(2,0)) {
  test('clicking component works with default on/off and mut helper', function(assert) {
    this.set('value', 'off');
    this.render(hbs`{{x-toggle
      value=value
      onToggle=(mut value)
    }}`);
    assert.equal(this.get('value'), 'off');
    this.$('div.x-toggle-btn').click();
    assert.equal(this.get('value'), 'on');
  });

  test('component toggles when container changes value', function(assert) {
    this.set('value', 'off');
    this.render(hbs`{{x-toggle
      value=value
      onToggle=(mut value)
    }}`);
    assert.equal(this.get('value'), 'off');
    this.set('value', 'on');
    assert.equal(this.get('value'), 'on');
  });

  test('clicking component works with bespoke values and mut helper', function(assert) {
    this.set('value', 'foo');
    this.render(hbs`{{x-toggle
      value=value
      offLabel='Foo::foo'
      onLabel='Bar::bar'
      onToggle=(mut value)
    }}`);
    assert.equal(this.get('value'), 'foo');
    assert.equal(this.$('div.x-toggle-btn').data('tg-off'), 'Foo', '"off" property set on toggle');
    assert.equal(this.$('div.x-toggle-btn').data('tg-on'), 'Bar', '"on" property set on toggle');
    this.$('div.x-toggle-btn').click();
    assert.equal(this.get('value'), 'bar', 'click toggles value');
  });

  test('clicking component works with boolean true/false', function(assert) {
    this.set('value', false);
    this.render(hbs`{{x-toggle
      value=value
      onToggle=(mut value)
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
      onToggle=(mut value)
      onLabel='Yes::true'
      offLabel='No::false'
    }}`);
    assert.equal(this.get('value'), false);
    this.$('div.x-toggle-btn').click();
    assert.equal(this.get('value'), true);
  });
}
