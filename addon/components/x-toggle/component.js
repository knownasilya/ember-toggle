import Ember from 'ember';
import layout from './template';

const { on, run, computed, observer } = Ember;

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  classNameBindings: ['toggled:x-toggle-container-checked', 'disabled:x-toggle-container-disabled'],
  classNames: ['x-toggle-container'],
  disabled: false,
  value: false,
  toggled: false,
  name: 'default',

  onLabelValue: computed('onLabel', function () {
    var on = this.get('onLabel');
    var index = on.indexOf(':');

    return index > -1 ? on.substr(0, index) : on;
  }),

  offLabelValue: computed('offLabel', function () {
    var off = this.get('offLabel');
    var index = off.indexOf(':');

    return index > -1 ? off.substr(0, index) : off;
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
    var offIndex = this.get('offLabel').indexOf(':');
    var onIndex = this.get('onLabel').indexOf(':');
    var offState = offIndex > -1 ? this.get('offLabel').substr(offIndex + 1) : false;
    var onState = onIndex > -1 ? this.get('onLabel').substr(onIndex + 1) : true;

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
        var offIndex = this.get('offLabel').indexOf(':');
        var onIndex = this.get('onLabel').indexOf(':');
        var offState = offIndex > -1 ? this.get('offLabel').substr(offIndex + 1) : false;
        var onState = onIndex > -1 ? this.get('onLabel').substr(onIndex + 1) : true;

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
