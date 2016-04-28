import Ember from 'ember';
import layout from './template';

const { run, computed } = Ember;
const a = Ember.A;

const xToggle = Ember.Component.extend({
  layout: layout,
  tagName: '',

  name: 'default',
  disabled: false,
  value: 'off',
  offLabel: 'Off:off',
  onLabel: 'On:on',

  init() {
    this._super(...arguments);
    run.schedule('afterRender', () => {
      // if value is not set to a valid state suggest a default to the container
      const {toggled, _onValue, _offValue} = this.getProperties('toggled', '_onValue', '_offValue');

      if(toggled === undefined) {
        const response = this.ddau('onToggle', {
          code: 'suggestion',
          oldValue: undefined,
          newValue: _offValue,
          context: this
        }, _offValue);
        // if container rejects suggestion disable control and throw error
        if(response === false) {
          this.set('disabled', true);
          this.ddau('onError', {
            code: 'invalid-value',
            value: undefined,
            validValues: [_onValue, _offValue],
            context: this
          }, null);
        }
      }
    });
  },

  toggled: computed('value', function() {
    const {value, _onValue, _offValue} = this.getProperties('value', '_onValue', '_offValue');
    const validValues = a([_onValue, _offValue]);

    if(validValues.contains(value)) {
      return value === _onValue;
    } else {
      return undefined;
    }
  }),

  _preferBoolean(value) {
    if(value === 'true') { return true; }
    if(value === 'false') { return false; }

    return value;
  },

  _onValue: computed('onLabel', function () {
    const attrs = this.get('onLabel').split(':');
    return this._preferBoolean(attrs.length === 1 ? attrs[0] : attrs[1]);
  }),
  _onLabel: computed('onLabel', function () {
    return this.get('onLabel').split(':')[0];
  }),

  _offValue: computed('offLabel', function () {
    const attrs = this.get('offLabel').split(':');
    return this._preferBoolean(attrs.length === 1 ? attrs[0] : attrs[1]);
  }),
  _offLabel: computed('offLabel', function () {
    return this.get('offLabel').split(':')[0];
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
      const {toggled,_offValue, _onValue} = this.getProperties('toggled', '_offValue', '_onValue');
      e.stopPropagation();

      this.ddau('onToggle', {
        code: 'toggled',
        oldValue: !toggled ? _offValue : _onValue,
        newValue: toggled ? _offValue : _onValue,
        context: this
      }, !toggled ? _offValue : _onValue);
    },
    setToValue(state, e) {
      const {toggled,_offValue, _onValue} = this.getProperties('toggled', '_offValue', '_onValue');
      e.stopPropagation();

      if(toggled !== state) {
        this.ddau('onToggle', {
          code: 'set',
          oldValue: state ? _offValue : _onValue,
          newValue: !state ? _offValue : _onValue,
          context: this
        }, !state ? _offValue : _onValue);
      }
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

xToggle[Ember.NAME_KEY] = 'x-toggle';
export default xToggle;
