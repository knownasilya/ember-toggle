import { action } from '@ember/object';
import Component from '@glimmer/component';
import { next } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class XToggleSwitch extends Component {
  @tracked labelDisabled = false;

  get effectiveForId() {
    return this.labelDisabled ? null : this.args.forId;
  }

  get themeClass() {
    let theme = this.args.theme || 'default';

    return `x-toggle-${theme}`;
  }

  @action
  handlePan(touchData) {
    if (this.args.disabled) {
      return;
    }

    const isToggled = touchData.current.distanceX > 0;

    this.args.sendToggle(isToggled);
    this._disableLabelUntilMouseUp();
  }

  @action
  onChange(e) {
    if (this.args.disabled) {
      return;
    }

    this.args.sendToggle(e.target.checked);
  }

  @action
  removeListener() {
    this._removeListener();
  }

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
        this.labelDisabled = false;
      });
    };

    this.labelDisabled = true;
    this._listener = _listener;

    document.addEventListener('mouseup', _listener);
  }

  _removeListener() {
    const _listener = this._listener;

    if (_listener) {
      document.removeEventListener('mouseup', _listener);
      this._listener = null;
    }
  }
}
