import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/pages/Home.vue";
import Signin from "./views/logon/Signin.vue";
import Register from "./views/logon/Register.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/signin", component: Signin },
  { path: "/register", component: Register },

];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;