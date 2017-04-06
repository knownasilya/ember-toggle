import Ember from 'ember';

export default Ember.Controller.extend({
	boundToggle: false,
	bV2: 'ho',

	actions: {
		checkboxToggled(toggled, toggledBy) {
			this.setProperties({
        toggled,
        toggledBy
      });
		},

    clicked(target, hash) {
      if (hash.code === 'toggled') {
        console.log('toggled: ', hash);
      } else {
        console.log('suggestion: ', hash);
      }
      this.set(target, hash.newValue);
    },

    rejected() {
      return false;
    }
	}
});
