import Vue from 'vue'
import App from './App.vue'
import './vueresource'
import router from "@/routes";
import {store} from "@/store";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.filter("toUpperCase", (val) => val.toUpperCase())

Vue.directive("highlight", (el, binding) => {
    el.style.backgroundColor = binding.value
})

export const eventBus = new Vue()

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
