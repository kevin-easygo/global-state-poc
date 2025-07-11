import type { Readable, Writable } from "svelte/store";
import { getStore, setStore } from "./map.js";

interface StateShardParams<Store extends Readable<any> | Writable<any>> {
  key: symbol;
  store: Store;
  dependsOn?: symbol[];
}

export class StateShard<Store extends Readable<any> | Writable<any>> {
  /** The unique symbol representing the shard */
  key: symbol;
  /** The store associated with the shard */
  store: Store;
  /** Optional dependencies that this shard relies on */
  dependsOn?: symbol[];

  constructor({ key, store, dependsOn }: StateShardParams<Store>) {
    this.key = key;
    this.store = store;
    this.dependsOn = dependsOn;
  }

  /**
   * Retrieves the store associated with this shard from the global state map.
   * @returns The store if it exists, undefined otherwise.
   */
  get() {
    return getStore<typeof this.store>(this.key) || undefined;
  }

  /**
   * Initializes the shard by checking its dependencies and setting it in the global state map.
   * Throws an error if any dependency is not found or not initialized.
   */
  init() {
    if (this.dependsOn) {
      for (const dep of this.dependsOn) {
        const depStore = getStore(dep);

        if (!depStore) {
          throw new Error(
            `Dependency store with key ${String(dep)} not found or not initialized.`
          );
        }
      }
    }

    setStore(this.key, this.store);
  }
}
