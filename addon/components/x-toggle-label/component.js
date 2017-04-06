import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',

  type: computed('value', {
    get() {
      let value = this.get('value');
      return value ? 'on' : 'off';
    }
  })
});
