import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "@/styles/custom-bootstrap.scss";
import "jquery";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
