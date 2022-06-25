import { createApp } from 'vue'
import App from './App.vue'

//### CUSTOM ROUTER
import router from  './router';
//### PRIME VUE FRAMEWORK INST
import PrimeVue from 'primevue/config';

//### PRIME VUE STYLES
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

//### PRIME VUE COMPONENTS 
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';

//APP ISNT
const app = createApp(App);

//CONFS
app.use(router);
app.use(PrimeVue);

//### COMPONENTS INST
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('InputText', InputText);


app.mount('#app');
