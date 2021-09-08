import { createApp } from 'vue'
import App from './App.vue'
//Importando o framework
import PrimeVue from "primevue/config";
//Importando os componentes
import Button from "primevue/button";
import InputText from "primevue/inputtext";
//Importando os estilos
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'



const app = createApp(App);
//configurando o uso do primevue
app.use(PrimeVue);
//registrando os componentes
app.component("Button", Button);
app.component("InputText", InputText);
app.mount('#app')
