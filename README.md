# ember-toggle

Checkbox based Toggle Switch component for Ember.
Based on [this](http://codepen.io/mallendeo/pen/eLIiG/) codepen.
Here's the official [demo] using this component.

[![NPM][npm-badge]][npm-badge-url]
[![Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]

## Install

`ember install ember-toggle`

## Basic Usage

```hbs
{{x-toggle value=myValue onToggle=(action (mut myValue))}}
```

### Themes

![ ](vendor/ember-toggle/example-images/themes.png)

There are many `themes` which change the visual appearance of the toggle.
Check the [demo] for interactive examples.

  - `'default'`
  - `'ios'`
  - `'light'`
  - `'flat'`
  - `'flip'`
  - `'skewed'`

> Example of changing the theme

```hbs
{{x-toggle value=toggled theme='ios' onToggle=(action (mut toggled))}}
```

_Note: By default only the `default` theme is included, see the Configuration section to import other themes._


### Size

You can also adjust the size of the widget by use of the `size` property. Valid sizes are:

  - `'small'`
  - `'medium'`
  - `'large'`


This option is available on all themes but is a less sensible choice for those themes which actually
include the label within the control (e.g., `skew` and `flip`).

### Labels

You can set both labels (what is displayed to the user) and the values associated with this label:

```hbs
{{x-toggle
  value=myValue
  showLabels=true
  onLabel='Enabled'
  offLabel='Disabled'
  onToggle=(action (mut myValue))
}}
```

If you want your labels to be display, then you must set `showLabels` to `true`.


### Available Options

* `theme` - One of 'light', 'ios', 'flat', 'flip', 'skewed', 'default'.
            Defaults to 'default' if not specified.
* `size` -  One of 'small', 'medium', 'large'.
            Defaults to 'medium' if not specified.
* `onLabel` - The label for the *on* state. Defaults to 'On'.
* `offLabel` - The label for the *off* state. Defaults to 'Off'.
* `showLabels` - Defaults to 'false', if 'true' will display labels on left and ride side of toggle switch
* `disabled` - Defaults to `false`, which means you can click the toggle.
  When `true`, an `.x-toggle-disabled` class is set on the toggle and an `.x-toggle-container-disabled` class is set on the component.
* `name` - A name to differentiate multiple toggles, gets passed to the `toggle` action. Defaults to 'default'.

### Configuring

Add a configuration for `ember-toggle` to include only the themes that
you will use.

```js
ENV['ember-toggle'] = {
  includedThemes: ['light', 'default', 'flip'],
  excludedThemes: ['flip'],
  excludeBaseStyles: false, // defaults to false
  defaultShowLabels: true,  // defaults to false
  defaultTheme: 'light',    // defaults to 'default'
  defaultSize: 'small',     // defaults to 'medium'
  defaultOffLabel: 'False', // defaults to 'Off'
  defaultOnLabel: 'True'    // defaults to 'On'
};
```
> note: the IOS theme is referred to as just `ios` not `ios7` as was indicated in the originating CSS source

To exclude or not include a theme, means that it's css styles will not be bundled with
your application, thus not polluting your app.

> **Note:** including a blank array e.g. `includeThemes: []` will not include any themes, leaving
you to define your own theme styles. See the `vendor/ember-toggle/themes` directory
for reference.
> **Note:** you may also want to set `excludeBaseStyles: true` so that this addon doesn't include the styles
used by all the themes.

## Contributing

See [CONTRIBUTING.md] for details.

[npm-badge]: https://img.shields.io/npm/v/ember-toggle.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-toggle
[travis-badge]: https://img.shields.io/travis/knownasilya/ember-toggle.svg
[travis-badge-url]: https://travis-ci.org/knownasilya/ember-toggle
[ember-observer-badge]: http://emberobserver.com/badges/ember-toggle.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-toggle
[demo]: http://knownasilya.github.io/ember-toggle/
[CONTRIBUTING.md]: CONTRIBUTING.md
