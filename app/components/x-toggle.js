import Ember from 'ember';
import ENV from '../config/environment';

const {
  on,
  run,
  computed,
  observer
} = Ember;
const config = ENV['ember-cli-toggle'] || {};

export default Ember.Component.extend({
  tagName: 'span',
  classNameBindings: ['toggled:x-toggle-container-checked', 'disabled:x-toggle-container-disabled'],
  classNames: ['x-toggle-container'],
  theme: config.defaultTheme || 'default',
  off: config.defaultOff || 'Off',
  on: config.defaultOn || 'On',
  showLabels: config.defaultShowLabels || false,
  size: config.defaultSize || 'medium',
  disabled: false,
  value: false,
  toggled: false,

  onLabel: computed('on', function () {
    return this.get('on').indexOf(':') > -1
      ? this.get('on').substr(0,this.get('on').indexOf(':'))
      : this.get('on');
  }),

  offLabel: computed('off', function () {
    return this.get('off').indexOf(':') > -1
      ? this.get('off').substr(0,this.get('off').indexOf(':'))
      : this.get('off');
  }),

  themeClass: computed('theme', function () {
    var theme = this.get('theme') || 'default';

    return 'x-toggle-' + theme;
  }),

  forId: computed(function () {
    return this.get('elementId') + '-x-toggle';
  }),

  wasToggled: on('init', observer('toggled', function () {
    var toggled = this.get('toggled');
    var offIndex = this.get('off').indexOf(':');
    var onIndex = this.get('on').indexOf(':');
    var offState = offIndex > -1 ? this.get('off').substr(offIndex + 1) : false;
    var onState = onIndex > -1 ? this.get('on').substr(onIndex + 1) : true;

    this.sendAction('toggle', toggled);

    if (toggled === false) {
      this.set('value', offState);
    } else {
      this.set('value', onState);
    }
  })),

  valueObserver: on('init', observer('value', function() {
	  var debounce = run.debounce(this, function () {
      var value = this.get('value');
      var offIndex = this.get('off').indexOf(':');
      var onIndex = this.get('on').indexOf(':');
      var offState = offIndex > -1 ? this.get('off').substr(offIndex + 1) : false;
      var onState = onIndex > -1 ? this.get('on').substr(onIndex + 1) : true;

      if (value === onState) {
        this.set('toggled', true);
      } else {
        this.set('toggled', false);
        this.set('value', offState);
      }
	  }, 500);

    this.set('debounce', debounce);
  })),

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
