import Vue from 'vue'
//import VueRouter from 'vue-router'
import App from './MathApp.vue'
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


//Vue.use(VueRouter);
Vue.use(BootstrapVue);


Vue.config.productionTip = false

// 1. Define route components.
// These can be imported from other files


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
new Vue({
  render: h => h(App)  
}).$mount("#app");
