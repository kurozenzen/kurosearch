![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fflurbudurbur%2Fkurosearch%2Fraw%2Fmain%2Fpackage.json&query=%24.version&style=flat&label=Version&link=https%3A%2F%2Fgithub.com%2Fflurbudurbur%2Fkurosearch%2Freleases%2Flatest)

<div style="display: flex; place-content: center; padding: 1rem">
    <img src=".github/brand/logo.svg" alt="logo" height="100px"/>
    <img src=".github/brand/cross.svg" alt="cross" height="80px">
    <img src=".github/brand/docker.svg" alt="docker" height="80px">
</div>

# KuroSearch X Docker

A Project that aims to containerize Kurosearch to jork it in privacy. Self-host it if you want!

## Tag explanation

| Tag            | Description                         |
| :------------- | :---------------------------------- |
| `latest`       | Latest stable release (recommended) |
| `canary`       | Latest development build            |
| `x.y.z[-rc.n]` | Specific release                    |

## Getting Started

Go to the [docker repo](https://github.com/flur34/flur34-composer) and read the instructions!

This repo is simply the source for the docker container. If you wish to develop (awesome!), then make use of the node scripts in the `package.json`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Got Issues?

Open 'em up in the issues tab (preferably) or contact me. Info below.

Discord Server: [Discord](https://discord.gg/AxUnC7n9ZP)

Discord: `@flurbudurbur`

## Planned Features

Always taking suggestions!

- [ ] Shared caching database like Redis/Valkey.
- [ ] Public instances page to view and use community member's instances.
- [ ] ~~R34 API polling and caching to always have latest images pre-loaded.~~

### Nice to have

- [x] GitHub workflow that compiles and publishes new releases.
