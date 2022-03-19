import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { getOwner } from '@ember/application';
import { guidFor } from '@ember/object/internals';
import { cached } from '@glimmer/tracking';

function configValue(configName, defaultValue) {
  return function (target, name) {
    return {
      get() {
        return (
          this.args[name] ??
          (configName && this.config?.[configName]) ??
          defaultValue
        );
      },
    };
  };
}

export default class XToggle extends Component {
  @tracked focused = false;

  container;

  @configValue(null, false) disabled;
  @configValue(null, false) value;
  @configValue(null, 'default') name;
  @configValue('defaultOnLabel', 'On') onLabel;
  @configValue('defaultOffLabel', 'Off') offLabel;
  @configValue('defaultTheme', 'default') theme;
  @configValue('defaultVariant', '') variant;
  @configValue('defaultShowLabels', false) showLabels;
  @configValue('defaultSize', 'medium') size;

  @cached
  get config() {
    return (
      getOwner(this).resolveRegistration('config:environment')[
        'ember-toggle'
      ] || {}
    );
  }

  get toggled() {
    return this.value;
  }

  @cached
  get forId() {
    return guidFor(this) + '-x-toggle';
  }

  @action
  toggleSwitch(value) {
    let onToggle = this.args.onToggle;
    let disabled = this.disabled;

    if (!disabled && value !== this.value && typeof onToggle === 'function') {
      let name = this.name;

      onToggle(value, name);

      // The click on input/label will toggle the input unconditionally.
      // Input state has to be updated manually to prevent it going out of
      // sync in case the action didn't update value.
      const checkbox = this.container.querySelector('.x-toggle');
      const newValue = this.value;

      if (checkbox.checked !== newValue) {
        checkbox.checked = newValue;
      }
    }
  }

  @action
  setContainer(element) {
    this.container = element;
  }

  @action
  spacebarToggle(event) {
    // spacebar: 32
    if (event.which === 32) {
      event.preventDefault();
      this.toggleSwitch(!this.value);
    }
  }

  @action
  handleFocusIn() {
    this.focused = true;
  }

  @action
  handleFocusOut() {
    this.focused = false;
  }
}
