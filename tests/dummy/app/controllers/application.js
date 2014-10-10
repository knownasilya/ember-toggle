import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    checkboxToggled: function () {
      this.toggleProperty('toggled');
    }
  }
});
