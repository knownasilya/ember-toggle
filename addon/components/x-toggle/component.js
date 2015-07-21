import Ember from 'ember';
import layout from './template';

const {
  on,
  run,
  computed,
  observer
} = Ember;

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  disabled: false,
  isToggled: computed.oneWay('toggled'),
  classNames: ['x-toggle-container'],
  classNameBindings: [
    'isToggled:x-toggle-container-checked',
    'disabled:x-toggle-container-disabled'
  ],

  onLabel: computed('on', {
    get() {
      return this.get('on').indexOf(':') > -1 ?
        this.get('on').substr(0,this.get('on').indexOf(':')) :
        this.get('on');
    }
  }),

  offLabel: computed('off', {
    get() {
      return this.get('off').indexOf(':') > -1 ?
        this.get('off').substr(0,this.get('off').indexOf(':')) :
        this.get('off');
    }
  }),

  themeClass: computed('theme', {
    get() {
      var theme = this.get('theme') || 'default';

      return `x-toggle-${theme}`;
    }
  }),

  forId: computed({
    get() {
      return `${this.get('elementId')}-x-toggle`;
    }
  }),

  toggledChanged: observer('isToggled', function () {
    var debounce = this.get('debounce');

    if (debounce) {
      run.cancel(debounce);
    }

	  debounce = run.debounce(this, function () {
      var toggled = this.get('isToggled');
      var offIndex = this.get('off').indexOf(':');
      var onIndex = this.get('on').indexOf(':');
      var offState = offIndex > -1 ? this.get('off').substr(offIndex + 1) : false;
      var onState = onIndex > -1 ? this.get('on').substr(onIndex + 1) : true;
      var state = toggled ? onState : offState;

      this.sendAction('ontoggle', toggled, state);
      this.set('debounce', null);
	  }, 500);

    this.set('debounce', debounce);
  }),

  clearDebounce: on('willDestroyElement', function () {
    var debounce = this.get('debounce');

    if (debounce) {
      run.cancel(debounce);
    }
  }),

  click(event) {
    event.stopPropagation();
  }
});
