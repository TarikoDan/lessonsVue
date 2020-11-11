import Vue from 'vue'
import App from './App.vue'
// import VueResource from "vue-resource" /! changed to the next exp:
import './vueresource'
import router from "@/routes";

Vue.config.productionTip = false

// Vue.use(VueResource)

Vue.filter("toUpperCase", (val) => val.toUpperCase())

Vue.directive("highlight", (el, binding) => {
    el.style.backgroundColor = binding.value
})

export const eventBus = new Vue()

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
