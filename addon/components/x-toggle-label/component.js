import classic from 'ember-classic-decorator';
import { tagName, layout as templateLayout } from '@ember-decorators/component';
import { action, computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';
import layout from './template';

@classic
@templateLayout(layout)
@tagName('')
export default class XToggleLabel extends Component {
  @readOnly('switchId')
  for;

  @computed('type')
  get labelType() {
    let type = this.type;

    return `${type}-label`;
  }

  @computed('value')
  get type() {
    return this.value ? 'on' : 'off';
  }

  @action
  clickLabel(e) {
    e.stopPropagation();
    e.preventDefault();
    this.sendToggle(this.value);
  }
}
