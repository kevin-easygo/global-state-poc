import { createGlobalStateMap } from "poc-global-state";
import stateA from "poc-state-a/state";
import stateB from "poc-state-b/state";
import type { ClientInit } from "@sveltejs/kit";

export const init: ClientInit = async () => {
  globalThis.globalState = createGlobalStateMap();

  stateA.init();
  stateB.init();
};
