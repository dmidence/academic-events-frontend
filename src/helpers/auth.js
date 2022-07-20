class Auth {
  constructor() {
    this.user = null;
    this.token = null;
  }

  setUser(user) {
    this.user = user;
  }

  setToken(token) {
    this.token = token;
  }

  getUser() {
    return this.user;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.user !== null && this.token !== null;
  }
  //   is admin
  isAdmin() {
    return this.user.role === "admin";
  }
}
