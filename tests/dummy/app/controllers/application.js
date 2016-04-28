import Ember from 'ember';

export default Ember.Controller.extend({
	boundToggle: false,
	bV2: 'ho',
  v1: 'Off',


	actions: {
		checkboxToggled(toggled, toggledBy) {
			this.setProperties({
        toggled, toggledBy
      });
		},
    clicked(target, hash) {
      console.log(hash);
      this.set(target, hash.newValue);
    },
    rejected() {
      return false;
    }
	}
});
