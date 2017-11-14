import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'label',
  attributeBindings: ['for'],
  classNames: ['toggle-text', 'toggle-prefix'],
  classNameBindings: ['labelType'],
  for: computed.readOnly('switchId'),
  isVisible: computed.readOnly('show'),
  
  labelType: computed('type', function() {
    let type = this.get('type');
    
    return `${type}-label`;
  }),
  
  type: computed('value', {
    get() {
      return this.get('value') ? 'on' : 'off';
    }
  }),
  
  click(e) {
    e.stopPropagation();
    e.preventDefault();
    this.sendToggle(this.get('value'));
  }
});
