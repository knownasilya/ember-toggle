# Contributing

Outlines how to begin contributing to this Ember-CLI project.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

## Github Pages/Demo

Build by checking out the relevant branch, since the test dummy app
is actually the demo app.

Run the following command:

```no-highlight
ember github-pages:commit --message <message describing demo release>
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Commit Messages

We're using `standard-version` for changelog generation and releases. Have a look at the conventions [here].

The following additional prefixes, are used as well.

- `docs`
- `chore`
- `tests`
- `demo` (regarding the dummy app, since it's made public)

[here]: https://www.npmjs.com/package/standard-version#commit-message-convention-at-a-glance
