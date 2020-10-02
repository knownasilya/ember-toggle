import XToggle from 'ember-toggle/components/x-toggle/component';
import ENV from '../config/environment';

const config = ENV['ember-toggle'] || {};

export default XToggle.extend({
  /* eslint-disable ember/avoid-leaking-state-in-ember-objects */
  theme: config.defaultTheme || 'default',
  variant: config.defaultVariant || '',
  defaultOffLabel: config.defaultOffLabel || 'Off::off',
  defaultOnLabel: config.defaultOnLabel || 'On::on',
  showLabels: config.defaultShowLabels || false,
  size: config.defaultSize || 'medium',
});
