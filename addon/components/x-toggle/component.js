import Ember from 'ember';
import layout from './template';

const { run, computed } = Ember;
const a = Ember.A;

export default Ember.Component.extend({
  layout: layout,
  tagName: '',

  name: 'default',
  disabled: false,
  value: false,

  toggled: computed('value', function() {
    const {value, onLabelValue, offLabelValue} = this.getProperties('value', 'onLabelValue', 'offLabelValue');
    const validValues = a([onLabelValue, offLabelValue]);

    if(validValues.contains(value)) {
      return value === onLabelValue;
    } else {
      return undefined;
    }
  }),

  init() {
    this._super(...arguments);
    run.schedule('afterRender', () => {
      // if value is not set to a valid state suggest a default to the container
      const {state, onLabelValue, offLabelValue} = this.getProperties('state', 'onLabelValue', 'offLabelValue');

      if(state === undefined) {
        const response = this.ddau('onToggle', {
          code: 'suggestion',
          oldValue: undefined,
          newValue: offLabelValue,
          context: this
        }, offLabelValue);
        // if container rejects suggestion disable control and throw error
        if(response === false) {
          this.set('disabled', true);
          this.ddau('onError', {
            code: 'invalid-value',
            value: undefined,
            validValues: [onLabelValue, offLabelValue],
            context: this
          });
        }
      }
    });
  },

  onLabelValue: computed('onLabel', function () {
    const [label, value] = this.get('onLabel').split(':');
    return value ? value : label;
  }),

  offLabelValue: computed('offLabel', function () {
    const [label, value] = this.get('offLabel').split(':');
    return value ? value : label;
  }),

  themeClass: computed('theme', function () {
    var theme = this.get('theme') || 'default';

    return 'x-toggle-' + theme;
  }),

  forId: computed(function () {
    return this.get('elementId') + '-x-toggle';
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
      // assume that container is using old-style actions
      this.sendAction(action, hash);
      return undefined;
    }
  }
});
