import Vue from 'vue';
import App from './App.vue';
import store from './store';

/*import touch from 'vue2-touch-events'

Vue.use(touch)*/

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
