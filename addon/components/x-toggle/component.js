import Component from '@ember/component';
import { computed } from "@ember/object"
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['x-toggle-component'],

  disabled: false,
  name: 'default',
  onLabel: 'On',
  offLabel: 'Off',
  value: false,

  // private
  toggled: computed.readOnly('value'),

  forId: computed(function() {
    return this.get('elementId') + '-x-toggle';
  }),

  actions: {
    sendToggle(value) {
      let onToggle = this.get('onToggle');

      if (value !== this.get('value') && typeof onToggle === 'function') {
        onToggle(value);
      }
    }
  }
});
