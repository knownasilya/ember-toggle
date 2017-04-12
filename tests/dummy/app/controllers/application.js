import Ember from 'ember';
import computed from 'ember-computed';
const { Logger: { log } } = Ember;

export default Ember.Controller.extend({
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
        log('toggled: ', hash);
      } else {
        log('suggestion: ', hash);
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
