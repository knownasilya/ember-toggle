# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="5.0.0-alpha.1"></a>
# [5.0.0-alpha.1](https://github.com/knownasilya/ember-toggle/compare/v5.0.0-alpha.0...v5.0.0-alpha.1) (2017-04-07)


### Bug Fixes

* simplify (#66) ([b3d04af](https://github.com/knownasilya/ember-toggle/commit/b3d04af))
* **dummy:** Add labels to disabled toggle ([dbbf670](https://github.com/knownasilya/ember-toggle/commit/dbbf670))
* the toggle switch explicit on and off (#67) ([283946f](https://github.com/knownasilya/ember-toggle/commit/283946f))



<a name="5.0.0-alpha.0"></a>
# [5.0.0-alpha.0](https://github.com/knownasilya/ember-toggle/compare/v4.0.2...v5.0.0-alpha.0) (2017-04-06)


### Bug Fixes

* Allow theme on switch, update dummy app more ([eb920af](https://github.com/knownasilya/ember-toggle/commit/eb920af))


### Features

* Add yield to labels, and fix their tests ([844fa14](https://github.com/knownasilya/ember-toggle/commit/844fa14))
* dummy app and split into components, block form ([c6e36c5](https://github.com/knownasilya/ember-toggle/commit/c6e36c5))
* simplify all the things ([ae1a0b6](https://github.com/knownasilya/ember-toggle/commit/ae1a0b6))


### BREAKING CHANGES

* Removed label values and made the action simple, passing only a single boolean value.

Fixes the value change bug. More changes to come.



<a name="4.0.2"></a>
## [4.0.2](https://github.com/knownasilya/ember-toggle/compare/v4.0.1...v4.0.2) (2017-03-17)


### Bug Fixes

* **docs:** Add missing backtick ([02402ba](https://github.com/knownasilya/ember-toggle/commit/02402ba))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/knownasilya/ember-toggle/compare/v4.0.0...v4.0.1) (2017-03-17)


### Bug Fixes

* Don't trigger action if `disabled` is set ([8e33e9e](https://github.com/knownasilya/ember-toggle/commit/8e33e9e))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/knownasilya/ember-toggle/compare/v3.0.0...v4.0.0) (2017-03-16)


### Features

* Rename Addon ([0bdcc89](https://github.com/knownasilya/ember-toggle/commit/0bdcc89))


### BREAKING CHANGES

* Addon is now named `ember-toggle`, make sure to update your `config/environment.js` accordingly.

_This is due to the fact that the `ember-cli-*` naming convention for Ember Addons is
meant mainly for extending the CLI in some way, which this addon doesn't do. Also it's shorter and easier to remember._
