import { createRouter, createWebHistory } from "vue-router";

import Landing from "./views/pages/Landing.vue";
import Home from "./views/pages/Home.vue";
import Signin from "./views/logon/Signin.vue";
import Register from "./views/logon/Register.vue";
import checkAccount from "./views/logon/checkAccount.vue";
import restorePassword from "./views/logon/restorePassword.vue";
import Page404 from "./views/shared/Page404.vue";

const routes = [
  { path: "/", component: Landing },
  { path: "/home", component: Home },
  { path: "/signin", component: Signin },
  { path: "/register", component: Register },
  { path: "/checkAccount", component: checkAccount },
  { path: "/restorePassword", component: restorePassword },
  { path: "/Page404", component: Page404 },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
