import type { Readable, Writable } from "svelte/store";
import { getStore, setStore } from "./map.js";

export class StateShard<Store extends Readable<any> | Writable<any>> {
  key: symbol;
  store: Store;

  constructor(key: symbol, store: Store) {
    this.key = key;
    this.store = store;
  }

  get() {
    return getStore<typeof this.store>(this.key);
  }

  init() {
    setStore(this.key, this.store);
  }
}
