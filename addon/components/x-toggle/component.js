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
  classNameBindings: ['toggled:x-toggle-container-checked', 'disabled:x-toggle-container-disabled'],
  classNames: ['x-toggle-container'],
  disabled: false,
  value: false,
  toggled: false,

  onLabel: computed('on', function () {
    return this.get('on').indexOf(':') > -1 ?
      this.get('on').substr(0,this.get('on').indexOf(':')) :
      this.get('on');
  }),

  offLabel: computed('off', function () {
    return this.get('off').indexOf(':') > -1 ?
      this.get('off').substr(0,this.get('off').indexOf(':')) :
      this.get('off');
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

    this.sendAction('toggle', toggled, this.get('name'));

    if (toggled === false) {
      this.set('value', offState);
    } else {
      this.set('value', onState);
    }
  })),

  valueObserver: on('init', observer('value', function() {
    var debounce = this.get('debounce');

    if (!debounce) {
      debounce = run.debounce(this, function () {
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

        this.set('debounce', null);
      }, 500);

      this.set('debounce', debounce);
    }
  })),

  clearDebounce: on('willDestroyElement', function () {
    var debounce = this.get('debounce');

    if (debounce) {
      run.cancel(debounce);
      this.set('debounce', null);
    }
  }),

  click(event) {
    event.stopPropagation();
  }
});
