import { browser } from "$app/environment";
import { createGlobalStateMap } from "poc-global-state";
import stateA from "poc-state-a";
import stateB from "poc-state-b";
import stateC from "poc-state-c";
import stateD from "poc-state-d";

const initStores = async () => {
  globalThis.globalState = createGlobalStateMap();

  stateA.init();
  stateB.init();

  if (!browser) stateC.init();

  stateD.init();
};

export default initStores;
