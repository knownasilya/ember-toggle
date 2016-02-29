import Ember from 'ember';

export default Ember.Controller.extend({
	boundToggle: false,
	bT2: false,

	actions: {
		checkboxToggled(toggled, toggledBy) {
			this.setProperties({
        toggled, toggledBy
      });
		}
	}
});
