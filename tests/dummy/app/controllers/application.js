import Ember from 'ember';

export default Ember.Controller.extend({
	boundToggle: false,
	bT2: false,
	actions: {
		checkboxToggled: function () {
			this.toggleProperty('toggled');
		}
	}
});
