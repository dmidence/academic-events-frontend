const mutation = {
  login(state, payload) {
    state.token = payload.token;
    state.user = payload.user;
  },
  logout(state) {
    state.token = undefined;
    state.user = {};
  },
  setUser(state, payload) {
    state.user = payload;
  },
  setToken(state, payload) {
    state.token = payload;
  },
};

export default mutation;
