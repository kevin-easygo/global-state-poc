import type { Readable, Writable } from "svelte/store";

declare global {
  var globalState: Map<symbol, Readable<any> | Writable<any>>;
}
