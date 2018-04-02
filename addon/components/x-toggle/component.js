import Component from '@ember/component';
import { computed } from '@ember/object';
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
      let disabled = this.get('disabled');
      
      if (!disabled && (value !== this.get('value')) && (typeof onToggle === 'function')) {
        onToggle(value);

        // The click on input/label will toggle the input unconditionally.
        // Input state has to be updated manually to prevent it going out of
        // sync in case the action didn't update value.
        const checkbox = this.element.querySelector('.x-toggle');
        const newValue = this.get('value');

        if (checkbox.checked !== newValue) {
          checkbox.checked = newValue;
        }
      }
    }
  }
});
