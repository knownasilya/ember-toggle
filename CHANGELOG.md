# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="5.2.2"></a>
## [5.2.2](https://github.com/knownasilya/ember-toggle/compare/v5.2.1...v5.2.2) (2018-04-02)


### Bug Fixes

* Bump ember-hammertime ([#109](https://github.com/knownasilya/ember-toggle/issues/109)) ([d2b3ad1](https://github.com/knownasilya/ember-toggle/commit/d2b3ad1))
* disables label action on disabled component ([#111](https://github.com/knownasilya/ember-toggle/issues/111)) ([471575a](https://github.com/knownasilya/ember-toggle/commit/471575a))
* update ember-hammertime ([#108](https://github.com/knownasilya/ember-toggle/issues/108)) ([7fa9ca3](https://github.com/knownasilya/ember-toggle/commit/7fa9ca3))



<a name="5.2.1"></a>
## [5.2.1](https://github.com/knownasilya/ember-toggle/compare/v5.2.0...v5.2.1) (2017-11-14)


### Bug Fixes

* **config:** Import all themes if user botched included themes ([691edb9](https://github.com/knownasilya/ember-toggle/commit/691edb9))



<a name="5.2.0"></a>
# [5.2.0](https://github.com/knownasilya/ember-toggle/compare/v5.1.1...v5.2.0) (2017-10-10)


### Bug Fixes

* **deprecation:** Fixed `canDispatchToEventManager` deprecation ([5954b1c](https://github.com/knownasilya/ember-toggle/commit/5954b1c))


### Features

* **theme:** Add material design toggle theme #90 (#97) ([90818f1](https://github.com/knownasilya/ember-toggle/commit/90818f1))



<a name="5.1.2"></a>
## [5.1.2](https://github.com/knownasilya/ember-toggle/compare/v5.1.1...v5.1.2) (2017-09-19)


### Bug Fixes

* `x-toggle` toggles on click when the `onToggle` action does not update the value (#92) ([bb46c74](https://github.com/knownasilya/ember-toggle/commit/bb46c74)), closes [#91](https://github.com/knownasilya/ember-toggle/issues/91) [#91](https://github.com/knownasilya/ember-toggle/issues/91)



<a name="5.1.1"></a>
## [5.1.1](https://github.com/knownasilya/ember-toggle/compare/v5.1.0...v5.1.1) (2017-09-12)


### Bug Fixes

* Don't toggle when panning while disabled (#88) ([95d839a](https://github.com/knownasilya/ember-toggle/commit/95d839a))



<a name="5.1.0"></a>
# [5.1.0](https://github.com/knownasilya/ember-toggle/compare/v5.0.2...v5.1.0) (2017-09-09)


### Bug Fixes

* **styles:** large container sizing fixed ([345ff35](https://github.com/knownasilya/ember-toggle/commit/345ff35))
* Properly remove listener, look for destroyed state before setting properties (#87) ([a9ee22b](https://github.com/knownasilya/ember-toggle/commit/a9ee22b))


### Features

* Enable toggling with a panning mouse/finger gesture, fixes #49 (#85) ([398f8d6](https://github.com/knownasilya/ember-toggle/commit/398f8d6)), closes [#49](https://github.com/knownasilya/ember-toggle/issues/49) [#85](https://github.com/knownasilya/ember-toggle/issues/85)



<a name="5.0.2"></a>
## [5.0.2](https://github.com/knownasilya/ember-toggle/compare/v5.0.1...v5.0.2) (2017-07-13)



<a name="5.0.1"></a>
## [5.0.1](https://github.com/knownasilya/ember-toggle/compare/v5.0.0...v5.0.1) (2017-07-13)



<a name="5.0.0"></a>
# [5.0.0](https://github.com/knownasilya/ember-toggle/compare/v5.0.0-alpha.7...v5.0.0) (2017-07-13)



<a name="5.0.0-alpha.7"></a>
# [5.0.0-alpha.7](https://github.com/knownasilya/ember-toggle/compare/v5.0.0-alpha.6...v5.0.0-alpha.7) (2017-07-13)


### Bug Fixes

* **build:** make sure default config is used ([25d79d8](https://github.com/knownasilya/ember-toggle/commit/25d79d8))
* **dep:** bump babel to 6.6 ([a30fd59](https://github.com/knownasilya/ember-toggle/commit/a30fd59))
* **shims:** moving to the new style module api format using ember-cli-babel 6.6 rather then a beta version of the shims (#81) ([da264a1](https://github.com/knownasilya/ember-toggle/commit/da264a1)), closes [#79](https://github.com/knownasilya/ember-toggle/issues/79)



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
