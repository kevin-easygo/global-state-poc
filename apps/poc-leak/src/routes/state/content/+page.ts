import { userState } from "$lib/state.svelte";

export const load = async () => {
  if (userState.email === "k.iatauro@easygo.io")
    return { content: "Welcome to the store, Kevin!" };
  else return { content: "WOLOLO!" };
};
