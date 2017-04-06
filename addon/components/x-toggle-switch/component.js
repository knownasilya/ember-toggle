import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',

  themeClass: computed('theme', function () {
    var theme = this.get('theme') || 'default';

    return 'x-toggle-' + theme;
  }),
});
