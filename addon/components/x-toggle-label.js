import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class XToggleLabel extends Component {
  get type() {
    return this.args.value ? 'on' : 'off';
  }

  @action
  clickLabel(e) {
    e.stopPropagation();
    e.preventDefault();

    this.args.sendToggle(this.args.value);
  }
}
