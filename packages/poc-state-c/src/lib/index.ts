import { writable } from "svelte/store";
import { StateShard } from "poc-global-state";

const state = new StateShard({
  key: Symbol.for("state-c"),
  store: writable("Initial state C"),
});

export default state;
