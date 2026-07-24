import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'test-app/config/environment';

import 'ember-toggle/styles/base.css';
import 'ember-toggle/styles/themes/default.css';
import 'ember-toggle/styles/themes/light.css';
import 'ember-toggle/styles/themes/ios.css';
import 'ember-toggle/styles/themes/flat.css';
import 'ember-toggle/styles/themes/skewed.css';
import 'ember-toggle/styles/themes/flip.css';
import 'ember-toggle/styles/themes/material.css';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
