## Who dis?

The purpose of this package is to illustrate how to split global state into multiple shards that can be defined within a package and then initialized within any application. The main goal here is to come up with a solution that allows teams to own their own logic when it comes to shards of global state, but at the same time allow other teams or other package maintainers to access that state, and to clearly define what the dependencies of each shard are.

## What do I look at?

The setup of the monorepo is quite simple. Its components are:

### The `stake-dk` app

A simple SvelteKit app with two main pages.

The index page at `/` renders values from shards of global state that are in different packages.

The broken page at `/broken` throws an error as the shard we are trying to access depends on another shard that has not been initialized yet. Although this behaviour would normally trigger a server-side error too, for sake of clarity I have set up the app so that the error is only thrown at the client level.

If you take a look at `hooks.server.ts`, `hooks.client.ts` and `init-stores.ts`, you can see how each shard is imported from a package, initialized and inserted into a global state map that holds each state's unique symbol as a key and its class instance as a value.

If you take a look at either page, you can also see how the shards are consumed via the `/state` exports of each state package, and how you can manipulate writable states from any context where the shard is initialized.

### The `poc-global-state` package

This package provides utilities to create and interact with shards, as well as an override of the `globalThis` object to correctly type the global state map.

The `shard.ts` file also contains the logic that checks for the availability of a shard's dependencies and throws an error should they not be available.

### The `poc-state` packages

These are very simple packages that contain shards of global state and, in some case, components that consume the global state.

The shard defined in `poc-state-d` has a dependency on the shard defined in `poc-state-c`, which is why the application throws if you visit the broken page.