import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('x-toggle', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
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

test('changing toggled changes state', function (assert) {
  assert.expect(3);

  var component = this.subject();

  assert.equal(this.$('input.x-toggle').prop('checked'), false, 'unchecked by default');

  Ember.run(function () {
    component.set('toggled', true);
  });

  assert.equal(this.$('input.x-toggle').prop('checked'), true, 'checked when toggled: true');

  Ember.run(function () {
    component.set('toggled', false);
  });

  assert.equal(this.$('input.x-toggle').prop('checked'), false, 'unchecked when toggled: false');
});
