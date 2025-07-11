import type { ServerInit } from "@sveltejs/kit";
import initStores from "$lib/init-stores";

export const init: ServerInit = async () => {
  initStores();
};
