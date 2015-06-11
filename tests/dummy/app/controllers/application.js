import Ember from 'ember';

export default Ember.Controller.extend({
  toggled: true,
  toggled2: false,
	boundToggle: false,

	actions: {
    overloaded(toggled, state) {
      this.set('state', state);
    },

    overloaded2(toggled, state) {
      this.set('state2', state);
    },

		checkboxToggled: function () {
			this.toggleProperty('toggled');
		}
	}
});
