import Vue from 'vue'
import App from './App.vue'
import VueSkeletonLoader from 'skeleton-loader-vue';
Vue.config.productionTip = false
Vue.component('vue-skeleton-loader', VueSkeletonLoader);
new Vue({
  render: h => h(App),
}).$mount('#app')
