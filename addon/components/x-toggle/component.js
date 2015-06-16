import Ember from 'ember';
import layout from './template';

const {
  on,
  run,
  computed,
  observer,
  typeOf
} = Ember;
const getValue = item => {
  return typeOf(item) === 'string' ? item.split(':')[0] : item;
};
const getLabel = item => {
  return typeOf(item) === 'string' ? item.split(':')[1] : item;
};


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
  // default value states
  on: true,
  off: false,

  onLabel: computed('on', function () {
   return getLabel(this.get('on'));
  }),

  offLabel: computed('off', function () {
   return getLabel(this.get('off'));
  }),

  themeClass: computed('theme', function () {
    var theme = this.get('theme') || 'default';

    return 'x-toggle-' + theme;
  }),

  forId: computed(function () {
    return this.get('elementId') + '-x-toggle';
  }),

  toggledChanged: observer('isToggled', function () {
	  var debounce = run.debounce(this, function () {
      var toggled = this.get('isToggled');
      var offState = getValue(this.get('off'));
      var onState = getValue(this.get('on'));
      var state = toggled ? onState : offState;

      this.sendAction('on-toggle', toggled, state);
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
