import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ToastService } from "./useToast";

export const useAuth = () => {
  const store = useStore();

  const { showError, showSuccess } = ToastService();
  const router = useRouter();

  onMounted(() => {
    const token = sessionStorage.getItem("accessToken");
    if (!token) {
      router.push("/signin");
      return;
    }
    store.commit("auth/setToken", token);
    getData();
  });

  watch(
    computed(() => store.getters["auth/isAuthenticated"]),
    (newValue) => {
      if (!newValue) {
        store.dispatch("auth/logout");
        router.push("/signin");
      } else {
        router.currentRoute.path === "/signin" && router.push("/home");
        getData();
      }
    }
  );

  const login = (email, password) => {
    store
      .dispatch("auth/login", { email, password })
      .then((e) => {
        console.log("login:", e);
        showSuccess("Inicio de Sesion Correcto", "Bienvenido!!!");
        router.push("/home");
        getData();
      })
      .catch((err) => {
        console.log("login:", err);
        showError("Error", err.message);
      });
  };

  const logout = () => {
    store.dispatch("auth/logout").then(() => {
      router.push("/signin");
      showSuccess("Logout successful", "You are now logged out");
    });
  };
  const getData = () => {
    store.dispatch("auth/getUserAPI");
  };
  return {
    getUser: computed(() => store.getters["auth/getUser"]),
    isLoggedIn: computed(() => store.getters["auth/isAuthenticated"]),
    isAdmin: computed(() => store.getters["auth/isAdmin"]),
    login,
    logout,
  };
};
