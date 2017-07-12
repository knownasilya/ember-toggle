import Controller from "@ember/controller"
import { computed } from "@ember/object"
import { debug } from "@ember/debug"

export default Controller.extend({
  boundToggle: false,
  bV2: 'ho',
  notToggleLabelValue: computed.not('toggleLabelValue'),
  toggleLabelValue: false,

  actions: {
    checkboxToggled(toggled, toggledBy) {
      this.setProperties({
        toggled,
        toggledBy
      });
    },

    clicked(target, hash) {
      if (hash.code === 'toggled') {
        debug('toggled: ', hash);
      } else {
        debug('suggestion: ', hash);
      }
      this.set(target, hash.newValue);
    },

    rejected() {
      return false;
    },
    notToggleLabelTest(value) {
      this.set('toggleLabelValue', !value);
    },
    toggleLabelTest(value) {
      this.set('toggleLabelValue', value);
    }
  }
});
