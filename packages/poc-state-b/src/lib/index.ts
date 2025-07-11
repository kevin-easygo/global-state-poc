import { writable } from "svelte/store";
import { StateShard } from "poc-global-state";

const state = new StateShard(
  Symbol.for("state-b"),
  writable("Initial state B")
);

export default state;
