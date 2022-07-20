const getters = {
  isAuthenticated: (state) => !!state.token ?? false,
  getUser: (state) => state.user,
  getToken: (state) => state.token,
  isAdmin: (state) =>
    state.user?.roles?.map((e) => e.name).includes("admin") ?? false,
};

export default getters;
