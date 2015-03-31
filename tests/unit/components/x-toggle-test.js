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

test('changing value changes state', function (assert) {
  assert.expect(3);

  var component = this.subject();

  assert.equal(this.$('input.x-toggle').attr('checked'), false, 'unchecked by default');

  Ember.run(function () {
    component.set('value', true);
  });

  assert.equal(this.$('input.x-toggle').attr('checked'), true, 'checked when value: true');

  Ember.run(function () {
    component.set('value', false);
  });

  assert.equal(this.$('input.x-toggle').attr('checked'), false, 'unchecked when value: false');
});
