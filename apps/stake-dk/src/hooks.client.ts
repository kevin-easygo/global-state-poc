import type { ClientInit } from "@sveltejs/kit";
import initStores from "$lib/init-stores";

export const init: ClientInit = async () => {
  initStores();
};
