import Vue from 'vue'
import App from './App.vue'
//import SuiVue from 'semantic-ui-vue';
//import 'semantic-ui-css/semantic.min.css';
//import '../semantic/dist/semantic.min.css';
import "materialize-css";
import "materialize-css/dist/css/materialize.css";
import "material-design-icons/iconfont/material-icons.css";
import router from "./router";
import Vuelidate from 'vuelidate';
import VueMask from 'v-mask';

Vue.use(Vuelidate)
Vue.use(VueMask)

Vue.config.productionTip = false

//Vue.use(SuiVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

