import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from './template';

export default Component.extend({
  layout,
  tagName: '',
  for: readOnly('switchId'),

  labelType: computed('type', function() {
    let type = this.get('type');
    
    return `${type}-label`;
  }),
  
  type: computed('value', {
    get() {
      return this.get('value') ? 'on' : 'off';
    }
  }),
  
  actions: {
    clickLabel(e) {
      e.stopPropagation();
      e.preventDefault();
      this.sendToggle(this.get('value'));
    }
  }
});
