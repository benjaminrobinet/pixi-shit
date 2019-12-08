import Vue from 'vue'
import App from './App.vue'
import Loader from "@/modules/Loader";
import {mixin as loaderMixin } from "@/modules/Loader";
import Viewport from "@/modules/Viewport";

Vue.config.productionTip = false;

Vue.mixin({
  beforeCreate: loaderMixin
});

// Vue.use(Viewport);

new Vue({
  mixins: [
    {
      update: () => {
        Loader.reset();
      },
      mounted: () => {
        Loader.load();
        Viewport.onResize();
      }
    }
  ],
  render: h => h(App),
}).$mount('#app');

