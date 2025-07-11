import { type Readable, type Writable } from "svelte/store";

/**
 * Creates a global stores map if it doesn't exist.
 * This map is used to store global state across different parts of the application.
 * @returns The global store map.
 */
export const createGlobalStateMap = () => {
  if (!globalThis.globalState)
    globalThis.globalState = new Map<symbol, Readable<any> | Writable<any>>();

  return globalThis.globalState;
};

/**
 * Retrieves a store in the global stores map.
 * @param key The unique symbol to identify the store.
 * @returns The store if it exists, undefined otherwise.
 */
export const getStore = <Store extends Readable<any> | Writable<any>>(
  key: symbol
) => {
  if (!globalThis.globalState)
    throw new Error(
      "Attempting to retrieve a global store before initializing the global stores map."
    );

  return globalThis.globalState.get(key) as Store | undefined;
};

/**
 * Sets a store in the global stores map.
 * @param key The unique symbol to identify the store.
 * @param store The store to set.
 */
export const setStore = <Data, Store extends Readable<Data> | Writable<Data>>(
  key: symbol,
  store: Store
) => {
  if (!globalThis.globalState)
    throw new Error(
      "Attempting to set a global store before initializing the global stores map."
    );

  if (globalThis.globalState.has(key)) {
    console.warn(
      `A store with the key ${key.toString()} already exists. Skipping initialisation.`
    );
  }

  globalThis.globalState.set(key, store);
};
