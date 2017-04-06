import Component from 'ember-component';
import computed from 'ember-computed';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['x-toggle-container'],
  classNameBindings: ['size', 'disabled:x-toggle-container-disabled', 'value:x-toggle-container-checked'],

  themeClass: computed('theme', function() {
    return `x-toggle-${this.get('theme') || 'default'}`;
  }),

  click(e) {
    const value = this.get('value');

    e.stopPropagation();
    e.preventDefault();

    this.sendToggle(!value);
  }
});
