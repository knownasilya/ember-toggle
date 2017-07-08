import Ember from 'ember';
import layout from './template';

const {
  Component,
  computed,
} = Ember;

export default Component.extend({
  layout,
  tagName: 'label',
  attributeBindings: ['for'],
  classNames: ['toggle-text', 'toggle-prefix'],
  classNameBindings: ['labelType'],
  for: computed.readOnly('switchId'),
  isVisible: computed.readOnly('show'),
  labelType: computed('type', function() {
    return `${this.get('type')}-label`;
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
