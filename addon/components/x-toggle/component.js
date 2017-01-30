import Ember from 'ember';
const { computed, typeOf } = Ember;  // jshint ignore:line

import layout from './template';

const a = Ember.A;

const xToggle = Ember.Component.extend({
  layout: layout,
  classNames: ['x-toggle-component'],

  name: 'default',
  disabled: false,
  value: 'off',
  onLabel: undefined,
  offLabel: undefined,

  _on: computed('onLabel', function() {
    const {onLabel, defaultOnLabel} = this.getProperties('onLabel', 'defaultOnLabel');
    return typeOf(onLabel) === 'undefined' ? defaultOnLabel : onLabel;
  }),

  _off: computed('offLabel', function() {
    const {offLabel, defaultOffLabel} = this.getProperties('offLabel', 'defaultOffLabel');
    return typeOf(offLabel) === 'undefined' ? defaultOffLabel : offLabel;
  }),

  toggled: computed('value', 'onValue', 'offValue', function() {
    const { value, _onValue, _offValue } = this.getProperties('value', '_onValue', '_offValue');
    const validValues = a([_onValue, _offValue]);

    if(validValues.includes(value)) {
      return value === _onValue;
    } else {
      return undefined;
    }
  }),

  invalidState: computed('toggled', function() {
    return Ember.typeOf(this.get('toggled')) === 'undefined' ? ' invalid-state' : '';
  }),

  _preferBoolean(value) {
    if(value === 'true') { return true; }
    if(value === 'false') { return false; }

    return value;
  },

  _onValue: computed('_on', function () {
    const attrs = String(this.get('_on') || '').split('::');

    return this._preferBoolean(attrs.length === 1 ? attrs[0] : attrs[1]);
  }),

  _onLabel: computed('_on', function () {
    const _on = String(this.get('_on')) || '';
    return _on.split('::')[0];
  }),

  _offValue: computed('_off', function () {
    const attrs = String(this.get('_off') || '').split('::');

    return this._preferBoolean(attrs.length === 1 ? attrs[0] : attrs[1]);
  }),

  _offLabel: computed('_off', function () {
    const _off = String(this.get('_off')) || '';

    return _off.split('::')[0];
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
      const {value, _offValue, _onValue} = this.getProperties('value', '_offValue', '_onValue');
      e.stopPropagation();
      e.preventDefault();
      const currentState = value === _onValue;
      const oldValue = currentState ? _onValue : _offValue;
      const newValue = currentState ? _offValue : _onValue;

      this.ddau('onToggle', {
        code: 'toggled',
        oldValue: oldValue,
        newValue: newValue,
        context: this
      }, newValue);
    },

    setToValue(state, e) {
      const {toggled,_offValue, _onValue} = this.getProperties('toggled', '_offValue', '_onValue');
      e.stopPropagation();
      e.preventDefault();

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
