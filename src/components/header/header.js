import SideBar from "../Sidebar.vue";
import { useAuth } from "../../composable";
export default {
  data() {
    return {
      items: [{ label: "AE", to: "/" }],
    };
  },
  props: {
    logged: Boolean,
  },
  components: {
    SideBar,
  },

  setup() {
    const { isLoggedIn, logout } = useAuth();
    const click = () => {
      console.log("logout");
      logout();
    };

    return {
      isLoggedIn,
      click,
    };
  },
};
