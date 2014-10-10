import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  theme: 'default',
  off: 'Off',
  on: 'On',
  toggled: false,

  inputClasses: Ember.observer('themeClass', 'inputCheckbox', function () {
    var themeClass = this.get('themeClass');
    var input = this.get('inputCheckbox');

    if (input) {
      var inputClasses = input.get('classNames') || [];

      input.set('classNames', inputClasses.concat(['x-toggle', themeClass]));
    }
  }).on('init'),

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
