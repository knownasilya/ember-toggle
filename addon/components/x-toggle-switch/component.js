import Component from '@ember/component';
import { computed } from '@ember/object';
import { next } from '@ember/runloop';
import layout from './template';

export default Component.extend({
  layout,
  tagName: '',

  labelDisabled: false,

  effectiveForId: computed('forId', 'labelDisabled', function () {
    return this.labelDisabled ? null : this.forId;
  }),

  themeClass: computed('theme', function () {
    let theme = this.theme || 'default';

    return `x-toggle-${theme}`;
  }),

  actions: {
    keyPress(event) {
      // spacebar: 32
      if (event.which === 32) {
        let value = this.value;

        this.sendToggle(!value);
        event.preventDefault();
      }
    },

    panRight() {
      if (this.disabled) {
        return;
      }

      this.sendToggle(true);
      this._disableLabelUntilMouseUp();
    },

    panLeft() {
      if (this.disabled) {
        return;
      }

      this.sendToggle(false);
      this._disableLabelUntilMouseUp();
    },
  },

  willDestroyElement() {
    this._super(...arguments);
    this._removeListener();
  },

  /*
    When you pan with a mouse and release the mouse button over the <label>
    element, a click event happens and returns the toggle to its initial
    state. :(

    To prevent this, we need to make the label non-functional until after the
    mouse button is released.
   */
  _disableLabelUntilMouseUp() {
    if (this.labelDisabled) {
      return;
    }

    const _listener = () => {
      next(() => {
        if (this.isDestroying || this.isDestroyed) {
          return;
        }

        this._removeListener();
        this.set('labelDisabled', false);
      });
    };

    this.setProperties({
      labelDisabled: true,
      _listener,
    });

    document.addEventListener('mouseup', _listener);
  },

  _removeListener() {
    const _listener = this._listener;

    if (_listener) {
      document.removeEventListener('mouseup', _listener);
      this.set('_listener', null);
    }
  },
});
