import { createRouter, createWebHistory } from "vue-router";

import Landing from "./views/pages/Landing.vue";
import Home from "./views/pages/Home.vue";
import Signin from "./views/logon/Signin.vue";
import Register from "./views/logon/Register.vue";
import checkAccount from "./views/logon/checkAccount.vue";
import restorePassword from "./views/logon/restorePassword.vue";
import ViewsUser from "./views/pages/ViewsUser.vue";
import Page404 from "./views/shared/Page404.vue";
import VerifyUser from "./views/logon/VerifyUser.vue";
import Graphs from "./views/pages/Graphs.vue";

const routes = [
  { path: "/", component: Landing },
  { path: "/home", component: Home },
  { path: "/signin", component: Signin },
  { path: "/register", component: Register },
  { path: "/checkAccount", component: checkAccount },
  { path: "/restorePassword", component: restorePassword },
  { path: "/viewsUser", component: ViewsUser },
  { path: "/Page404", component: Page404 },
  { path: "/VerifyUser", component: VerifyUser },
  { path: "/graphs", component: Graphs },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
