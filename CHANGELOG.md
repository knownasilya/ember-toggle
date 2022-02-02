# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [9.0.3](https://github.com/knownasilya/ember-toggle/compare/v9.0.2...v9.0.3) (2022-02-02)


### Bug Fixes

* only use default values if null or undefined is passed ([8a27c4a](https://github.com/knownasilya/ember-toggle/commit/8a27c4a434123e7091621653880223f1944459a3))

### [9.0.2](https://github.com/knownasilya/ember-toggle/compare/v9.0.1...v9.0.2) (2022-01-18)


### Bug Fixes

* jquery scenario ([0d40f54](https://github.com/knownasilya/ember-toggle/commit/0d40f54017d3d88e2a4dc2f179c0ef426ee73aea))
* update ember-gesture-modifier to v2 ([08ae8b5](https://github.com/knownasilya/ember-toggle/commit/08ae8b566d8cd3c8a63c6fee2e7cf9450dd75184))
* update gesture addon to fix Ember v4 support ([f59d178](https://github.com/knownasilya/ember-toggle/commit/f59d1785db216c10f3da8863634da9ad8541dac0))
* update more deps ([f4dbd7e](https://github.com/knownasilya/ember-toggle/commit/f4dbd7e4cbd84c9dd8b86796bba2f5fa623f5357))

### [9.0.1](https://github.com/knownasilya/ember-toggle/compare/v9.0.0...v9.0.1) (2022-01-13)


### Bug Fixes

* add more npm ignores ([57aa240](https://github.com/knownasilya/ember-toggle/commit/57aa240d4d075aea5840dfc3696ec37be5600596))

## [9.0.0](https://github.com/knownasilya/ember-toggle/compare/v7.1.1...v9.0.0) (2022-01-13)


### ⚠ BREAKING CHANGES

* Drop Ember < 3.24
* **deps:** Drop support for node 10 and ember 3.16

### Features

* **deps:** update ember to 3.28 ([0511cb5](https://github.com/knownasilya/ember-toggle/commit/0511cb5ba0a9492d1e4bf6fd91fe2fe701a7938e))
* refactor all components and controllers to glimmer and octane ([1dd0739](https://github.com/knownasilya/ember-toggle/commit/1dd0739dc2024a6a44b4da72155c3091e1305965))


### Bug Fixes

* cache config and forId ([9d6e79d](https://github.com/knownasilya/ember-toggle/commit/9d6e79db7a36d659b27b54876f0ced85e1bc6558))
* v3.28.3...v4.1.0 ([7031937](https://github.com/knownasilya/ember-toggle/commit/7031937c944d9e32e753656fb78718d6d8376626))

## [8.0.0](https://github.com/knownasilya/ember-toggle/compare/v7.1.1...v8.0.0) (2021-10-20)


### ⚠ BREAKING CHANGES

* **deps:** Drop support for node 10 and ember 3.16

### Features

* **deps:** update ember to 3.28 ([0511cb5](https://github.com/knownasilya/ember-toggle/commit/0511cb5ba0a9492d1e4bf6fd91fe2fe701a7938e))
* refactor all components and controllers to glimmer and octane ([1dd0739](https://github.com/knownasilya/ember-toggle/commit/1dd0739dc2024a6a44b4da72155c3091e1305965))

### [7.1.1](https://github.com/knownasilya/ember-toggle/compare/v7.1.0...v7.1.1) (2021-04-02)


### Bug Fixes

* convert deprecated hasBlock to helper syntax ([0353829](https://github.com/knownasilya/ember-toggle/commit/0353829e720c896e7804d1b5467d413c8991ff42))
* remove dark theme alternatives from themes list ([6841bb6](https://github.com/knownasilya/ember-toggle/commit/6841bb6798ce732b6b6c13ef58da46778c86f3f9))

## [7.1.0](https://github.com/knownasilya/ember-toggle/compare/v7.0.0...v7.1.0) (2020-11-20)


### Features

* Add dark variant for ios, flat and material themes. ([#144](https://github.com/knownasilya/ember-toggle/issues/144)) ([70e49f4](https://github.com/knownasilya/ember-toggle/commit/70e49f4066c37f7c92bd1a8b4cf9ac299a2dce87))
* Added auto variant ([#145](https://github.com/knownasilya/ember-toggle/issues/145)) ([ac8ad6a](https://github.com/knownasilya/ember-toggle/commit/ac8ad6a86f11d584a46deba37e2022dae1aea3ce))


### Bug Fixes

* class syntax and tagless all the way ([f893b07](https://github.com/knownasilya/ember-toggle/commit/f893b0726ce6febc16ee478fa85a8e61f2e7fc70))
* keypress is deprecated ([ff3b2f7](https://github.com/knownasilya/ember-toggle/commit/ff3b2f7fc8f57d77134ab624a756e54bb93ad77b))
* material theme transition speed ([#142](https://github.com/knownasilya/ember-toggle/issues/142)) ([09c2c00](https://github.com/knownasilya/ember-toggle/commit/09c2c00268d34a2c0139c59dfed262485683d062))
* Replace hammerjs with ember-gesture-modifiers, fixes [#138](https://github.com/knownasilya/ember-toggle/issues/138) ([#139](https://github.com/knownasilya/ember-toggle/issues/139)) ([884c715](https://github.com/knownasilya/ember-toggle/commit/884c7156790f82ac3e58c93770d15530fe3cf009))
* spacebar toggle ([cecbdb9](https://github.com/knownasilya/ember-toggle/commit/cecbdb9c804a9e65a1c41e0933542f456c01fdbe))
* update deps and remove mixin, convert to tagless ([609a0e1](https://github.com/knownasilya/ember-toggle/commit/609a0e152ded32460eb3a207cabe51e2f0864407))

## [7.0.0](https://github.com/knownasilya/ember-toggle/compare/v6.0.3...v7.0.0) (2020-09-12)


### ⚠ BREAKING CHANGES

* Drop Node < 10
* Drop Ember < 3.12 LTS (still might work, but no longer tested)

### Bug Fixes

* lint and missing cp key ([caf2b0b](https://github.com/knownasilya/ember-toggle/commit/caf2b0bd5543f8510fa655e100ac0b53b0fa34cc))
* remove usage of action helper in most places ([2d8cefb](https://github.com/knownasilya/ember-toggle/commit/2d8cefbff226e6c8f44ee139abf71e07aaf8a17a))
* Upgrade Ember v3.11.0...v3.21.2 ([7dc1ee8](https://github.com/knownasilya/ember-toggle/commit/7dc1ee8ff8710d24e3b95f7cb68d3d4415fba9c9))

### [6.0.3](https://github.com/knownasilya/ember-toggle/compare/v6.0.2...v6.0.3) (2020-09-12)


### Bug Fixes

* audit fix dependencies ([63250c4](https://github.com/knownasilya/ember-toggle/commit/63250c4b97ca9a80c541a911b8e7971b937fcb84))

<a name="6.0.2"></a>
## [6.0.2](https://github.com/knownasilya/ember-toggle/compare/v6.0.1...v6.0.2) (2020-01-17)


### Bug Fixes

* add ...attributes to label ([9fd9024](https://github.com/knownasilya/ember-toggle/commit/9fd9024)), closes [#129](https://github.com/knownasilya/ember-toggle/issues/129)



<a name="6.0.1"></a>
## [6.0.1](https://github.com/knownasilya/ember-toggle/compare/v6.0.0...v6.0.1) (2019-12-27)


### Bug Fixes

* make label tagless to preserve visibility feature ([0b9e39e](https://github.com/knownasilya/ember-toggle/commit/0b9e39e))
* **deps:** security audit ([ae4d3c8](https://github.com/knownasilya/ember-toggle/commit/ae4d3c8))
* address the `ember-component-is-visible` deperecation (3.15) ([#128](https://github.com/knownasilya/ember-toggle/issues/128)) ([c1ad3ba](https://github.com/knownasilya/ember-toggle/commit/c1ad3ba))



<a name="6.0.0"></a>
# [6.0.0](https://github.com/knownasilya/ember-toggle/compare/v5.3.3...v6.0.0) (2019-07-17)


### Bug Fixes

* audit ([ad606dd](https://github.com/knownasilya/ember-toggle/commit/ad606dd))
* more this in templates ([457b812](https://github.com/knownasilya/ember-toggle/commit/457b812))
* update to latest ember version via ember-cli-update ([82d2cdf](https://github.com/knownasilya/ember-toggle/commit/82d2cdf))
* use this in x-toggle template ([1298ddd](https://github.com/knownasilya/ember-toggle/commit/1298ddd))


### BREAKING CHANGES

* no longer include 2.18 in build matrix, although it might still work.



<a name="5.3.3"></a>
## [5.3.3](https://github.com/knownasilya/ember-toggle/compare/v5.3.2...v5.3.3) (2019-07-05)


### Bug Fixes

* Make versions of ember-gestures less than 1.1.1 unacceptable ([#120](https://github.com/knownasilya/ember-toggle/issues/120)) ([b0d3d6f](https://github.com/knownasilya/ember-toggle/commit/b0d3d6f))



<a name="5.3.2"></a>
## [5.3.2](https://github.com/knownasilya/ember-toggle/compare/v5.3.1...v5.3.2) (2018-12-22)


### Bug Fixes

* remove hammertime ([5941a77](https://github.com/knownasilya/ember-toggle/commit/5941a77))
* run audit fix ([080062c](https://github.com/knownasilya/ember-toggle/commit/080062c))
* run codemods ([feed19e](https://github.com/knownasilya/ember-toggle/commit/feed19e))
* update all the things ([2355b6b](https://github.com/knownasilya/ember-toggle/commit/2355b6b))
* update deprecated live reload dep ([f7f0d8b](https://github.com/knownasilya/ember-toggle/commit/f7f0d8b))
* update outdated deps ([d61ad26](https://github.com/knownasilya/ember-toggle/commit/d61ad26))



<a name="5.3.1"></a>
## [5.3.1](https://github.com/knownasilya/ember-toggle/compare/v5.3.0...v5.3.1) (2018-10-11)


### Bug Fixes

* dependency vulnerabilities ([370e514](https://github.com/knownasilya/ember-toggle/commit/370e514))
* set default tabindex to 0 ([874da62](https://github.com/knownasilya/ember-toggle/commit/874da62)), closes [#118](https://github.com/knownasilya/ember-toggle/issues/118)



<a name="5.3.0"></a>
# [5.3.0](https://github.com/knownasilya/ember-toggle/compare/v5.2.4...v5.3.0) (2018-07-31)


### Features

* make the toggle more accessible ([e0beb9b](https://github.com/knownasilya/ember-toggle/commit/e0beb9b))



<a name="5.2.4"></a>
## [5.2.4](https://github.com/knownasilya/ember-toggle/compare/v5.2.3...v5.2.4) (2018-05-21)


### Bug Fixes

* send name via toggle action again ([570df98](https://github.com/knownasilya/ember-toggle/commit/570df98))



<a name="5.2.3"></a>
## [5.2.3](https://github.com/knownasilya/ember-toggle/compare/v5.2.2...v5.2.3) (2018-05-21)


### Bug Fixes

* Update ember-gestures version to 1.1.0. (#116) ([01e5914](https://github.com/knownasilya/ember-toggle/commit/01e5914))
* Updates Ember to 3.1.2 (#113) ([71578c8](https://github.com/knownasilya/ember-toggle/commit/71578c8))
* Use proper role, remove invalid aria-role ([4270acf](https://github.com/knownasilya/ember-toggle/commit/4270acf)), closes [#106](https://github.com/knownasilya/ember-toggle/issues/106)



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
