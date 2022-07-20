import { fetchConToken, fetchSinToken } from "./../../helpers/fetch";
const actions = {
  // add your actions here
  login({ commit }, payload) {
    const { email, password } = payload;

    return fetchSinToken("api/v1/sessions", { email, password }, "POST", {})
      .then(({ data }) => {
        console.log("data", data);
        commit("setToken", data.accessToken);
        sessionStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        return data;
      })
      .catch((e) => {
        return Promise.reject(e.response.data);
      });
  },
  logout({ commit }) {
    commit("logout");
    sessionStorage.removeItem("accessToken");
  },

  getUserAPI({ commit }) {
    fetchConToken("api/v1/users/me", {}, "GET").then(({ data }) => {
      commit("setUser", data);
    });
  },
  register({ commit }, payload) {
    const { email, password, name } = payload;
    fetchSinToken("api/v1/users", { email, password, name }, "POST", {}).then(
      ({ data }) => {
        console.log(data);
        sessionStorage.setItem("accessToken", JSON.stringify(data.accessToken));
      }
    );
  },
};

export default actions;
