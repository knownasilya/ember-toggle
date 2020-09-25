import classic from 'ember-classic-decorator';
import { tagName, layout as templateLayout } from '@ember-decorators/component';
import { action, computed } from '@ember/object';
import Component from '@ember/component';
import { next } from '@ember/runloop';
import layout from './template';

@classic
@templateLayout(layout)
@tagName('')
export default class XToggleSwitch extends Component {
  labelDisabled = false;

  @computed('forId', 'labelDisabled')
  get effectiveForId() {
    return this.labelDisabled ? null : this.forId;
  }

  @computed('theme')
  get themeClass() {
    let theme = this.theme || 'default';

    return `x-toggle-${theme}`;
  }

  @action
  handlePanRight() {
    if (this.disabled) {
      return;
    }

    this.sendToggle(true);
    this._disableLabelUntilMouseUp();
  }

  @action
  handlePanLeft() {
    if (this.disabled) {
      return;
    }

    this.sendToggle(false);
    this._disableLabelUntilMouseUp();
  }

  willDestroyElement() {
    super.willDestroyElement(...arguments);
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
        this.set('labelDisabled', false);
      });
    };

    this.setProperties({
      labelDisabled: true,
      _listener,
    });

    document.addEventListener('mouseup', _listener);
  }

  _removeListener() {
    const _listener = this._listener;

    if (_listener) {
      document.removeEventListener('mouseup', _listener);
      this.set('_listener', null);
    }
  }
}
