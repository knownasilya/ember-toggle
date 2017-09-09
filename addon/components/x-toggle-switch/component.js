import Component from '@ember/component';
import { computed } from "@ember/object"
import { next } from '@ember/runloop';
import layout from './template';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Component.extend(RecognizerMixin, {
  layout,
  tagName: 'span',
  classNames: ['x-toggle-container'],
  classNameBindings: ['size', 'disabled:x-toggle-container-disabled', 'value:x-toggle-container-checked'],

  labelDisabled: false,
  recognizers: 'pan',

  effectiveForId: computed('forId', 'labelDisabled', function() {
    return this.get('labelDisabled') ? null : this.get('forId');
  }),

  themeClass: computed('theme', function() {
    return `x-toggle-${this.get('theme') || 'default'}`;
  }),

  panRight() {
    this.get('sendToggle')(true);
    this._disableLabelUntilMouseUp()
  },

  panLeft() {
    this.get('sendToggle')(false);
    this._disableLabelUntilMouseUp();
  },

  /*
    When you pan with a mouse and release the mouse button over the <label>
    element, a click event happens and returns the toggle to its initial
    state. :(

    To prevent this, we need to make the label non-functional until after the
    mouse button is released.
   */
  _disableLabelUntilMouseUp () {
    if (this.get('labelDisabled')) {
      return;
    }

    this.set('labelDisabled', true);

    document.addEventListener('mouseup', () => {
      next(() => this.set('labelDisabled', false));
    });
  }
});
