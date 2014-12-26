import Ember from 'ember';
import ENV from '../config/environment';

var observer = Ember.observer;
var on = Ember.on;
var computed = Ember.computed;
var config = ENV['ember-cli-toggle'];

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['x-toggle-container'],
  theme: config.defaultTheme || 'default',
  off: config.defaultOff || 'Off',
  offLabel: computed('off', function() {
  	return this.get('off').indexOf(':') > -1 ? this.get('off').substr(0,this.get('off').indexOf(':')) : this.get('off');
  }),
  on: config.defaultOn || 'On',
  onLabel: computed('on', function() {
  	return this.get('on').indexOf(':') > -1 ? this.get('on').substr(0,this.get('on').indexOf(':')) : this.get('on');
  }),
  showLabels: config.defaultShowLabels || false,
  size: config.defaultSize || 'medium',
  value: false,
  toggled: false,

  themeClass: computed('theme', function () {
    var theme = this.get('theme') || 'default';

    return 'x-toggle-' + theme;
  }),

  forId: computed(function () {
    return this.get('elementId') + '-x-toggle';
  }),

  wasToggled: on('init', observer('toggled', function () {
    var toggled = this.get('toggled');
	var offState = this.get('off').substr(this.get('off').indexOf(':')+1) || false;
	var onState = this.get('on').substr(this.get('on').indexOf(':')+1) || true;	
    this.sendAction('toggle', toggled);
	if(toggled === false) {
		this.set('value',offState);
	} else {
		this.set('value',onState);
	}
  })),
  valueObserver: on('init', observer('value', function() {
	  Ember.run.debounce(this, function() {
	  	  var value = this.get('value');
	  	  var offState = this.get('off').substr(this.get('off').indexOf(':')+1) || false;
	  	  var onState = this.get('on').substr(this.get('on').indexOf(':')+1) || true;
	  	  if(value === onState) {
			  this.set('toggled', true);
	  	  } else {
	  		  this.set('toggled', false);
			  this.set('value',offState);
	  	  }
	  }, 500);
  }))
  
});
