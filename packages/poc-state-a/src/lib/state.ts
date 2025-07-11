import { readable, type Readable } from "svelte/store";

import { StateShard } from "poc-global-state";

const state = new StateShard(
  Symbol.for("state-a"),
  readable("Initial state A")
);

export default state;
