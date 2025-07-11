import { writable } from "svelte/store";
import { StateShard } from "poc-global-state";

const state = new StateShard({
  key: Symbol.for("state-b"),
  store: writable("Initial state B"),
});

export default state;
