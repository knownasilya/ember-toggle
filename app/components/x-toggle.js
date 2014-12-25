import Ember from 'ember';
import ENV from '../config/environment';

var observer = Ember.observer;
var on = Ember.on;
var computed = Ember.computed;
var config = ENV['ember-cli-toggle'];

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['x-toggle-container'],
  theme: config.defaultTheme || 'default',
  off: config.defaultOff || 'Off',
  on: config.defaultOn || 'On',
  showText: config.defaultShowText || false,
  size: config.defaultSize || 'medium',
  toggled: false,

  themeClass: computed('theme', function () {
    var theme = this.get('theme') || 'default';

    return 'x-toggle-' + theme;
  }),

  sizeClass: computed('size', 'themeClass', function () {
    var size = this.get('size') || 'medium';
    var themeClass = this.get('themeClass');

    return themeClass + '-' + size;
  }),

  forId: computed(function () {
    return this.get('elementId') + '-x-toggle';
  }),

  wasToggled: on('init', observer('toggled', function () {
    var toggled = this.get('toggled');
    
    this.sendAction('toggle', toggled);
  }))
});
