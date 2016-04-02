import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('x-toggle', {
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('changing toggled changes state', function(assert) {
  assert.expect(3);

  var component = this.subject();

  assert.equal(this.$('input.x-toggle').prop('checked'), false, 'unchecked by default');

  Ember.run(() => {
    component.set('toggled', true);
  });

  assert.equal(this.$('input.x-toggle').prop('checked'), true, 'checked when toggled: true');

  Ember.run(() => {
    component.set('toggled', false);
  });

  assert.equal(this.$('input.x-toggle').prop('checked'), false, 'unchecked when toggled: false');
});

test('changing disabled', function(assert) {
  assert.expect(3);

  var component = this.subject();

  assert.equal(this.$('input.x-toggle').prop('disabled'), false, 'disabled by default');

  Ember.run(() => {
    component.set('disabled', true);
  });

  assert.equal(this.$('input.x-toggle').prop('disabled'), true, 'disabled when disabled: true');

  Ember.run(() => {
    component.set('disabled', false);
  });

  assert.equal(this.$('input.x-toggle').prop('disabled'), false, 'disabled when disabled: false');
});

test('toggle action fires when toggled changed from false to true', function (assert) {
  assert.expect(1);

  var component = this.subject({ toggled: false });

  Ember.run(() => {
    component.set('toggle', (toggleVal) => {
      assert.ok(toggleVal);
      component.set('toggle', null);
    });
  });

  this.$('input.x-toggle').click();
});

test('toggle action fires when toggled changed from true to false', function (assert) {
  assert.expect(1);

  var component = this.subject({ toggled: true });

  Ember.run(() => {
    component.set('toggle', (toggleVal) => {
      assert.notOk(toggleVal);
    });
  });

  this.$('input.x-toggle').click();
});

