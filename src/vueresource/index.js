import Vue from 'vue'
import VueResource from "vue-resource"

Vue.use(VueResource);

Vue.http.options.root = ("https://less3-b1930.firebaseio.com/");

Vue.http.interceptors.push((request, next) => {
    request.headers.set("Authorisation", localStorage.getItem('token'));
    next()
})
// Vue.http.interceptors.push((response, next) => {
//     if (response.errors) {
//         if (response.errorCode === 401) {
//             request.headers.set("Authorisation", localStorage.getItem('refreshToken'));
//             localStorage.clear()
//             return
//         }
//     }
//     next()
// })

