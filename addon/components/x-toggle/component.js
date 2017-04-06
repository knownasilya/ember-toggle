import Ember from 'ember';
import layout from './template';

const { computed } = Ember;  // jshint ignore:line

const ToggleComponent = Ember.Component.extend({
  layout: layout,
  classNames: ['x-toggle-component'],

  name: 'default',
  onLabel: 'On',
  offLabel: 'Off',
  disabled: false,
  value: false,

  // private
  toggled: computed.readOnly('value'),

  themeClass: computed('theme', function () {
    var theme = this.get('theme') || 'default';

    return 'x-toggle-' + theme;
  }),

  forId: computed(function () {
    return this.get('elementId') + '-x-toggle';
  }),

  sendToggle(value) {
    let onToggle = this.get('onToggle');

    if (typeof onToggle === 'function') {
      onToggle(value);
    }
  },

  actions: {
    onClick(e) {
      let value = this.get('value');

      e.stopPropagation();
      e.preventDefault();

      this.sendToggle(!value);
    },

    setToValue(value, e) {
      e.stopPropagation();
      e.preventDefault();
      
      this.sendToggle(value);
    }
  }
});

ToggleComponent[Ember.NAME_KEY] = 'x-toggle';

export default ToggleComponent;
