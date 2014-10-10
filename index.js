module.exports = {
  name: 'ember-cli-toggle',

  included: function(app) {
    app.import('vendor/ember-cli-toggle/base.css');

    // Use configuration to decide which theme css files
    // to import, thus not populating the user's app
    this.importThemes(app);
  },

  importThemes: function(app) {
    var projectConfig = this.project.config(app.env);
    var config = projectConfig['ember-cli-toggle'];

    if (config && Object.keys(config).length) {
      var allThemes = ['light', 'ios', 'default', 'flat', 'skewed', 'flip'];
      var included = config.includedThemes;
      var excluded = config.excludedThemes;
      var themes = [];

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

      themes.forEach(function (theme) {
        app.import('vendor/ember-cli-toggle/themes/' + theme + '.css');
      });
    }
  }
};

