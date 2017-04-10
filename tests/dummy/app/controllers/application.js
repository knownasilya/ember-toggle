import Ember from 'ember';
const { Logger: { log } } = Ember;

export default Ember.Controller.extend({
  boundToggle: false,
  bV2: 'ho',
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
    toggleLabelTest(value) {
      this.set('toggleLabelValue', value);
    }
  }
});
