import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import authState from "./auth";

// Create a new store instance.
const store = createStore({
  modules: {
    // Add your modules here.
    auth: authState,
    Plugin: [
      new VuexPersistence({
        storage: window.localStorage,
      }),
    ],
  },
});

export default store;
