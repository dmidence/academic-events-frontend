import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const authState = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default authState;
