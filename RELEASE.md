# Release Process

Releases in this repo are mostly automated using [release-plan](https://github.com/embroider-build/release-plan/). Once you label all your PRs correctly (see below) you will have an automatically generated PR that updates your `CHANGELOG.md` file and a `.release-plan.json` that is used to prepare the release once the PR is merged.

## One-time setup

Two things must be configured on the GitHub repo for the automation to work:

1. **`NPM_TOKEN` secret** — an npm [automation access token](https://docs.npmjs.com/creating-and-viewing-access-tokens) for a user that can publish `ember-toggle`. Add it under **Settings → Secrets and variables → Actions → New repository secret** as `NPM_TOKEN`.
2. **PR labels** — create the labels used to categorize changes (see below). If a label is missing, `release-plan` can't categorize that PR.
3. **Allow Actions to create PRs** — under **Settings → Actions → General → Workflow permissions**, enable "Allow GitHub Actions to create and approve pull requests" (the `Prepare Release` PR is opened by the workflow).

## Preparation

Since the majority of the actual release process is automated, the remaining tasks before releasing are:

- correctly labeling **all** pull requests that have been merged since the last release
- updating pull request titles so they make sense to our users

Some great information on why this is important can be found at [keepachangelog.com](https://keepachangelog.com/en/1.1.0/), but the overall guiding principle here is that changelogs are for humans, not machines.

When reviewing merged PRs the labels to be used are:

- `breaking` - Used when the PR is considered a breaking change.
- `enhancement` - Used when the PR adds a new feature or enhancement.
- `bug` - Used when the PR fixes a bug included in a previous release.
- `documentation` - Used when the PR adds or updates documentation.
- `internal` - Internal changes or things that don't fit in any other category.

**Note:** `release-plan` requires that **all** PRs are labeled. If a PR doesn't fit in a category it's fine to label it as `internal`.

## Release

Once the prep work is completed, the actual release is straightforward: you just need to merge the open [Prepare Release](https://github.com/knownasilya/ember-toggle/pulls?q=is%3Apr+is%3Aopen+%22Prepare+Release%22+in%3Atitle) PR.

On every push to `main`, the `Release Plan Review` workflow opens (or updates) a **Prepare Release** PR that bumps the version and updates `CHANGELOG.md` based on the labels above. Merging that PR triggers the `Publish Stable` workflow, which publishes `ember-toggle` to npm.

> **Prereleases (beta/alpha):** `release-plan` handles stable releases. Betas are still cut manually — bump the addon version (e.g. `cd ember-toggle && npm version prerelease --preid beta`) and `pnpm publish --tag beta` from `ember-toggle/`, so they never move the `latest` dist-tag.
