import { createApp } from "vue";
import App from "./App.vue";

//### CUSTOM ROUTER
import router from "./router";
//### PRIME VUE FRAMEWORK INST
import PrimeVue from "primevue/config";

//### PRIME VUE STYLES
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

//### PRIME VUE COMPONENTS
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Toolbar from "primevue/toolbar";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";
import RadioButton from "primevue/radiobutton";
import Card from "primevue/card";
import Dropdown from "primevue/dropdown";
import Password from "primevue/password";

//### Bootstrap
import "bootstrap/dist/css/bootstrap.css";

//APP ISNTa
const app = createApp(App);

//CONFS
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

//### COMPONENTS INST
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("Toolbar", Toolbar);
app.component("Toast", Toast);
app.component("Dialog", Dialog);
app.component("Calendar", Calendar);
app.component("RadioButton", RadioButton);
app.component("Card", Card);
app.component("Dropdown", Dropdown);
app.component("Password", Password);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
