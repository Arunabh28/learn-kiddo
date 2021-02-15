import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

// 1. Define route components.
// These can be imported from other files


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/Home', component: require('./components/HelloWorld.vue').default,
    props:{
      msg:"Hello World"
    }
},
  { path: '/English', component: require('./components/English.vue').default },
  { path: '/Maths', component: require('./components/Maths.vue').default},
  { path: '/Maths/OddEven', component: require('./components/MathTopics/OddEven.vue').default}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  router,
  render: h => h(App),
  el:'#app'
})
