import type { Readable, Writable } from "svelte/store";
import { getStore, setStore } from "./map.js";

interface StateShardParams<Store extends Readable<any> | Writable<any>> {
  key: symbol;
  store: Store;
  dependsOn?: symbol[];
}

export class StateShard<Store extends Readable<any> | Writable<any>> {
  key: symbol;
  store: Store;
  dependsOn?: symbol[];

  constructor({ key, store, dependsOn }: StateShardParams<Store>) {
    this.key = key;
    this.store = store;
    this.dependsOn = dependsOn;
  }

  get() {
    if (this.dependsOn) {
      for (const dep of this.dependsOn) {
        const depStore = getStore(dep);

        if (!depStore) {
          throw new Error(
            `Dependency store with key ${String(dep)} not found.`
          );
        }
      }
    }

    return getStore<typeof this.store>(this.key) || undefined;
  }

  init() {
    setStore(this.key, this.store);
  }
}
