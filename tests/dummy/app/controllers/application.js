import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { debug } from '@ember/debug';

export default class ApplicationController extends Controller {
  bV2 = 'ho';

  @tracked boundToggle = false;
  @tracked disabledTest = false;
  @tracked toggleLabelValue = false;

  get notToggleLabelValue() {
    return !this.toggleLabelValue;
  }

  @action
  checkboxToggled(toggled, toggledBy) {
    this.toggled = toggled;
    this.toggledBy = toggledBy;
  }

  @action
  clicked(target, hash) {
    if (hash.code === 'toggled') {
      debug('toggled: ', hash);
    } else {
      debug('suggestion: ', hash);
    }
    this[target] = hash.newValue;
  }

  @action
  rejected() {
    return false;
  }

  @action
  notToggleLabelTest(value) {
    this.toggleLabelValue = !value;
  }

  @action
  toggleLabelTest(value) {
    this.toggleLabelValue = value;
  }
}
