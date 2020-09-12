import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['x-toggle-component'],
  classNameBindings: ['focused:x-toggle-focused'],
  attributeBindings: ['tabindex'],

  tabindex: '0',
  focused: false,
  disabled: false,
  name: 'default',
  onLabel: 'On',
  offLabel: 'Off',
  value: false,

  // private
  toggled: readOnly('value'),

  forId: computed(function () {
    return this.get('elementId') + '-x-toggle';
  }),

  keyPress(event) {
    // spacebar: 32
    if (event.which === 32) {
      let value = this.get('value');

      this.toggleSwitch(!value);
      event.preventDefault();
    }
  },

  focusIn() {
    this.set('focused', true);
  },

  focusOut() {
    this.set('focused', false);
  },

  toggleSwitch(value) {
    let onToggle = this.get('onToggle');
    let disabled = this.get('disabled');

    if (
      !disabled &&
      value !== this.get('value') &&
      typeof onToggle === 'function'
    ) {
      let name = this.get('name');

      onToggle(value, name);

      // The click on input/label will toggle the input unconditionally.
      // Input state has to be updated manually to prevent it going out of
      // sync in case the action didn't update value.
      const checkbox = this.element.querySelector('.x-toggle');
      const newValue = this.get('value');

      if (checkbox.checked !== newValue) {
        checkbox.checked = newValue;
      }
    }
  },

  actions: {
    sendToggle(value) {
      this.toggleSwitch(value);
    },
  },
});
