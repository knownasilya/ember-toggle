import classic from 'ember-classic-decorator';
import { layout as templateLayout } from '@ember-decorators/component';
import { action, computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';
import layout from './template';

@classic
@templateLayout(layout)
export default class XToggle extends Component {
  tabindex = '0';
  focused = false;
  disabled = false;
  name = 'default';
  onLabel = 'On';
  offLabel = 'Off';
  value = false;

  // private
  @readOnly('value')
  toggled;

  @computed('elementId')
  get forId() {
    return this.elementId + '-x-toggle';
  }

  toggleSwitch(value) {
    let onToggle = this.onToggle;
    let disabled = this.disabled;

    if (!disabled && value !== this.value && typeof onToggle === 'function') {
      let name = this.name;

      onToggle(value, name);

      // The click on input/label will toggle the input unconditionally.
      // Input state has to be updated manually to prevent it going out of
      // sync in case the action didn't update value.
      const checkbox = this.element.querySelector('.x-toggle');
      const newValue = this.value;

      if (checkbox.checked !== newValue) {
        checkbox.checked = newValue;
      }
    }
  }

  @action
  sendToggle(value) {
    this.toggleSwitch(value);
  }

  @action
  handleFocusIn() {
    this.set('focused', true);
  }

  @action
  handleFocusOut() {
    this.set('focused', false);
  }
}
