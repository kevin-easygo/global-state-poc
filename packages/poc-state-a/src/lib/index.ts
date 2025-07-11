import { readable } from "svelte/store";
import { StateShard } from "poc-global-state";

const state = new StateShard({
  key: Symbol.for("state-a"),
  store: readable("Initial state A"),
});

export default state;
