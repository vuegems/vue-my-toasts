import Vue from "vue";
import App from "./Demo";
import DemoToast from "./DemoToast";
import plugin from "../src/index";

Vue.use(plugin, {
  component: DemoToast,
  options: {
    position: "bottom-right"
  }
});

Vue.config.productionTip = false;

new Vue({
  // NOTE: if you need to inject as option, you can set here!
  // plugin,
  render: h => h(App)
}).$mount("#app");
