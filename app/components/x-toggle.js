import Ember from 'ember';
import ENV from '../config/environment';

var observer = Ember.observer;
var on = Ember.on;
var computed = Ember.computed;
var config = ENV['ember-cli-toggle'];

export default Ember.Component.extend({
  tagName: 'span',
  theme: config.defaultTheme || 'default',
  off: 'Off',
  on: 'On',
  toggled: false,

  inputClasses: on('init', observer('themeClass', 'inputCheckbox', function () {
    var themeClass = this.get('themeClass');
    var input = this.get('inputCheckbox');

    if (input) {
      var inputClasses = input.get('classNames') || [];

      input.set('classNames', inputClasses.concat(['x-toggle', themeClass]));
    }
  })),

  themeClass: computed('theme', function () {
    var theme = this.get('theme') || 'default';

    return 'x-toggle-' + theme;
  }),

  generatedId: computed(function () {
    return this.get('elementId') + '-x-toggle';
  }),

  wasToggled: on('init', observer('toggled', function () {
    var toggled = this.get('toggled');
    
    this.sendAction('toggle', toggled);
  }))
});
