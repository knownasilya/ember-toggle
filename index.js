'use strict';

module.exports = {
  name: require('./package').name,

  included: function (app, parentAddon) {
    var target = parentAddon || app;

    // necessary for nested usage
    // parent addon should call `this._super.included.apply(this, arguments);`
    if (target.app) {
      target = target.app;
    }

    this.app = target;

    // Use configuration to decide which theme css files
    // to import, thus not populating the user's app
    this.importThemes(target);
    this._super.included.apply(this, arguments);
  },

  importThemes: function (app) {
    var projectConfig = this.project.config(app.env);
    var config = projectConfig['ember-toggle'] || {};
    var excludeBaseStyles = config.excludeBaseStyles || false;
    var allThemes = [
      'light',
      'ios',
      'default',
      'flat',
      'skewed',
      'flip',
      'material',
    ];
    var included = config.includedThemes;
    var excluded = config.excludedThemes;
    var themes = [];

    if (included && Array.isArray(included)) {
      themes = themes.concat(included);
    } else {
      themes = allThemes;
    }

    if (excluded && Array.isArray(excluded)) {
      themes = themes.filter(function (theme) {
        return excluded.indexOf(theme) === -1;
      });
    }

    themes = themes.filter(function (theme) {
      return theme && allThemes.indexOf(theme) !== -1;
    });

    if (!excludeBaseStyles) {
      app.import('vendor/ember-toggle/base.css');
    }

    // Include all themes if user incorrectly specified themes in the config
    themes = themes.length ? themes : allThemes;

    themes.forEach(function (theme) {
      app.import('vendor/ember-toggle/themes/' + theme + '.css');
    });
  },
};
