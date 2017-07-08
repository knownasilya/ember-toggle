# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="5.0.0-alpha.6"></a>
# [5.0.0-alpha.6](https://github.com/knownasilya/ember-toggle/compare/v5.0.0-alpha.5...v5.0.0-alpha.6) (2017-07-08)


### Bug Fixes

* moving components that get merged into the app tree to use a 'classic' syntax so it doesn't conflict with 'pod moudle prefies' that might be set in the app (#76) ([ae054bb](https://github.com/knownasilya/ember-toggle/commit/ae054bb))



<a name="5.0.0-alpha.5"></a>
# [5.0.0-alpha.5](https://github.com/knownasilya/ember-toggle/compare/v4.0.2...v5.0.0-alpha.5) (2017-05-18)


### Bug Fixes

* **styles:** tweak large size, making it less awkward ([4dca99a](https://github.com/knownasilya/ember-toggle/commit/4dca99a))
* Allow theme on switch, update dummy app more ([5174457](https://github.com/knownasilya/ember-toggle/commit/5174457))
* **dummy:** Add labels to disabled toggle ([a57cd7c](https://github.com/knownasilya/ember-toggle/commit/a57cd7c))
* check value before sending action (#68) ([2094f0c](https://github.com/knownasilya/ember-toggle/commit/2094f0c))
* label wrapping and internal div label (#69) ([2052f6c](https://github.com/knownasilya/ember-toggle/commit/2052f6c))
* remove browser-check ([b1a34a7](https://github.com/knownasilya/ember-toggle/commit/b1a34a7))
* remove injection of browser checker ([93c7f47](https://github.com/knownasilya/ember-toggle/commit/93c7f47))
* **ie:** Only check if input when not IE (#71) ([2fa01f5](https://github.com/knownasilya/ember-toggle/commit/2fa01f5))
* removing a double trigger due to the visual toggle already being surrounded by a label ([16f5c66](https://github.com/knownasilya/ember-toggle/commit/16f5c66))
* simplify (#66) ([24122ae](https://github.com/knownasilya/ember-toggle/commit/24122ae))
* the toggle switch explicit on and off (#67) ([b756aba](https://github.com/knownasilya/ember-toggle/commit/b756aba))


### Features

* Add yield to labels, and fix their tests ([973e47d](https://github.com/knownasilya/ember-toggle/commit/973e47d))
* dummy app and split into components, block form ([8b295cf](https://github.com/knownasilya/ember-toggle/commit/8b295cf))
* simplify all the things ([eee5f25](https://github.com/knownasilya/ember-toggle/commit/eee5f25))


### BREAKING CHANGES

* Removed label values and made the action simple, passing only a single boolean value.

Fixes the value change bug. More changes to come.



<a name="5.0.0-alpha.4"></a>
# [5.0.0-alpha.4](https://github.com/knownasilya/ember-toggle/compare/v5.0.0-alpha.3...v5.0.0-alpha.4) (2017-04-13)


### Bug Fixes

* **ie:** Only check if input when not IE (#71) ([69af664](https://github.com/knownasilya/ember-toggle/commit/69af664))



<a name="5.0.0-alpha.3"></a>
# [5.0.0-alpha.3](https://github.com/knownasilya/ember-toggle/compare/v5.0.0-alpha.2...v5.0.0-alpha.3) (2017-04-10)


### Bug Fixes

* **styles:** tweak large size, making it less awkward ([395824d](https://github.com/knownasilya/ember-toggle/commit/395824d))
* label wrapping and internal div label (#69) ([2bcc44a](https://github.com/knownasilya/ember-toggle/commit/2bcc44a))



<a name="5.0.0-alpha.2"></a>
# [5.0.0-alpha.2](https://github.com/knownasilya/ember-toggle/compare/v5.0.0-alpha.1...v5.0.0-alpha.2) (2017-04-10)


### Bug Fixes

* check value before sending action (#68) ([42a95a5](https://github.com/knownasilya/ember-toggle/commit/42a95a5))



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
