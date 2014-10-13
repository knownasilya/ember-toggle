# ember-cli-toggle

[![NPM][npm-badge]][npm-badge-url]

Based on [this](http://codepen.io/mallendeo/pen/eLIiG/) codepen.

## Usage

First install with `npm install --save-dev ember-cli-toggle`, and add one of the following
in your template:

```hbs
{{x-toggle toggle='startCar'}}
{{x-toggle theme='light' toggle='enableLayer'}}
{{x-toggle theme='ios' toggle='muteVolume'}}
{{x-toggle theme='flat' toggle='disableTest'}}
{{x-toggle theme='flip' off='Nope' on='Yep' toggle='haveFun'}}
{{x-toggle theme='skewed' toggle='enablePartyMode'}}
```

### Configuring

Add a configuration for `ember-cli-toggle` to include only the themes that
you will use.

```js
ENV['ember-cli-toggle'] = {
  includedThemes: ['light', 'default', 'flip'],
  excludedThemes: ['flip'],
  defaultTheme: 'light' // defaults to 'default'
};
```

To exclude or not include a theme, means that it's css styles will not be bundled with
your application, thus not polluting your app.

_Note: Including a blank array e.g. `includeThemes: []` will not include any themes, leaving
you to define your own theme styles. See the `vendor/ember-cli-toggle/themes` directory
for reference._

## Contributing

Outlines how to begin contributing to this Ember-CLI project.

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

[npm-badge]: https://nodei.co/npm/ember-cli-toggle.png?downloads=true&stars=true
[npm-badge-url]: https://nodei.co/npm/ember-cli-toggle/
