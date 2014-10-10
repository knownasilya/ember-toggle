import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  theme: 'default',
  off: 'Off',
  on: 'On',

  inputClasses: function () {
    var themeClass = this.get('themeClass');

    return ['x-toggle', themeClass];
  }.property('themeClass'),

  themeClass: function () {
    var theme = this.get('theme') || 'default';

    return 'x-toggle-' + theme;
  }.property('theme'),

  generatedId: function () {
    return this.get('elementId') + '-x-toggle';
  }.property()
});
