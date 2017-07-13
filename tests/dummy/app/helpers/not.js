import Ember from 'ember';

export function not([val]/*, hash*/) {
  return !val;
}

export default Ember.Helper.helper(not);
