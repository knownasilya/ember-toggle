module.exports = {
  name: 'ember-cli-toggle',

  included: function(app) {
    this.app = app;

    var config = this.project.config(this.app.env);
    var toggleConfig = config['ember-cli-toggle'];

    app.import('vendor/ember-cli-toggle/base.css');

    if (toggleConfig && Object.keys(toggleConfig).length) {
      var allThemes = ['light', 'ios', 'default', 'flat', 'skewed', 'flip'];
      var themes = [];

      if (toggleConfig.includedThemes) {
        themes = themes.concat(toggleConfig.includedThemes);
      }     

      if (!themes.length) {
        themes = allThemes;
      }

      if (toggleConfig.excludedThemes) {
        var excluded = toggleConfig.excludedThemes;

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

      toggleConfig.userThemes = themes;
    }
  }
};
