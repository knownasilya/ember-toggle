import Component from 'ember-component';
import computed from 'ember-computed';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'label',
  attributeBindings: ['for', 'id'],
  classNames: ['toggle-text', 'toggle-prefix'],
  classNameBindings: ['labelType'],
  for: computed.readOnly('switchId'),
  id: computed('switchId', 'type', function() {
    const switchId = this.get('switchId');
    const type = this.get('type');
    return `${type}-label-${switchId}`;
  }),
  isVisible: computed.readOnly('show'),
  labelType: computed('type', function() {
    return `${this.get('type')}-label`;
  }),

  type: computed('value', {
    get() {
      return this.get('value') ? 'on' : 'off';
    }
  }),
  click() {
    this.clickAction();
  }
});
