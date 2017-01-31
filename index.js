/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-toggle',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);

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

  importThemes: function(app) {
    var projectConfig = this.project.config(app.env);
    var config = projectConfig['ember-cli-toggle'];
    var themes = [];
    var excludeBaseStyles = false;

    if (config) {
      var allThemes = ['light', 'ios', 'default', 'flat', 'skewed', 'flip'];
      var included = config.includedThemes;
      var excluded = config.excludedThemes;
      
      excludeBaseStyles = config.excludeBaseStyles || false;

      if (included && Array.isArray(included)) {
        themes = themes.concat(included);
      }
      else {
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
    }
    
    if (!excludeBaseStyles) {
      app.import('vendor/ember-cli-toggle/base.css');
    }

    themes = themes.length ? themes : ['default'];

    themes.forEach(function (theme) {
      app.import('vendor/ember-cli-toggle/themes/' + theme + '.css');
    });
  }
};

