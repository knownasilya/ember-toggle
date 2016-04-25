import Ember from 'ember';
import layout from './template';

const { on, run, computed, observer } = Ember;
const a = Ember.A;

export default Ember.Component.extend({
  layout: layout,
  tagName: '',
  disabled: false,
  value: false,
  toggled: false,
  name: 'default',

  init() {
    this._super(...arguments);
    run.schedule('afterRender', () => {
      // if value is not set to a valid state suggest a default to the container
      const {value, onLabelValue, offLabelValue} = this.getProperties('value', 'onLabelValue', 'offLabelValue');
      const validValues = a([onLabelValue, offLabelValue]);
      if(!validValues.contains(value)) {
        const response = this.ddau('onToggle', {
          code: 'suggestion',
          oldValue: value,
          newValue: offLabelValue,
          context: this
        }, offLabelValue);
        // if container rejects suggestion disable control and throw error
        if(response === false) {
          this.set('disabled', true);
          this.ddau('onError', {
            code: 'invalid-value',
            value: value,
            validValues: validValues,
            context: this
          });
        }
      }
    });
  },

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

  actions: {
    onClick(e) {
      e.stopPropagation();
    }
  },

  /**
   * Provide a DDAU "action" or "mut" response
   * @param  {string } action The name of the exposed action property
   * @param  {hash}    hash   A hash of attributes that are passed back to a "action"
   * @param  {mixed}   value  A value that is passed to the "update" function (aka, mut helper) if available
   * @return {boolean}        Pass back true if `mut` not used; if used then proxies mut's response back
   */
  ddau(action, hash, value) {
    if (this.attrs[action] && this.attrs[action].update) {
      this.attrs[action].update(value);
      return true;
    } else if (this.attrs[action]) {
      return this.attrs[action](hash);
    } else {
      return false;
    }
  }
});
