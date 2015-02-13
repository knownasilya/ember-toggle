/* jshint node: true */

var compileSass = require('broccoli-sass');
'use strict';

module.exports = {
  name: 'ember-cli-toggle',


  treeForStyles: function () {
    
    return compileSass([__dirname + '/addon/styles/'], 'default.scss', '/assets/toggle-theme.css');
  }
};
