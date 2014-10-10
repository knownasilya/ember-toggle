import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  theme: 'default',
  off: 'Off',
  on: 'On',
  toggled: false,

  inputClasses: Ember.computed('themeClass', function () {
    var themeClass = this.get('themeClass');

    return ['x-toggle', themeClass];
  }),

  themeClass: Ember.computed('theme', function () {
    var theme = this.get('theme') || 'default';

    return 'x-toggle-' + theme;
  }),

  generatedId: Ember.computed(function () {
    return this.get('elementId') + '-x-toggle';
  }),

  wasToggled: Ember.observer('toggled', function () {
    var toggled = this.get('toggled');
    
    this.sendAction('toggle', toggled);
  }).on('init')
});
