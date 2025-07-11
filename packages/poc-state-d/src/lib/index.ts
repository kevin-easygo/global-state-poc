import { writable } from "svelte/store";
import { StateShard } from "poc-global-state";
import stateC from "poc-state-c";

const state = new StateShard({
  key: Symbol.for("state-d"),
  store: writable("Initial state D"),
  dependsOn: [stateC.key],
});

export default state;
