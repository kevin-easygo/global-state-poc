import { user } from "$lib/state.svelte";
import { get } from "svelte/store";

export const load = async () => {
  if (get(user).email === "k.iatauro@easygo.io")
    return { content: "Welcome to the store, Kevin!" };
  else return { content: "WOLOLO!" };
};
