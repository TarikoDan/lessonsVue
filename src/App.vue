<template>
  <div id="app">
    <img ref="logo" :width="logoWidth" alt="Vue logo" src="./assets/logo.png">

    <div class="btn-group" role="group" aria-label="Basic example">
      <router-link
          :to="{name: 'hello', params: {msg: 'let\'s explore Vue.js !'}}"
          class="btn btn-secondary"
      >
        HELLO
      </router-link>

        <router-link
            :to="{name: 'counter', params: {msg: 'counter'}}"
            class="btn btn-outline-dark"
            active-class="active"
            exact
        >
          COUNTER
        </router-link>

      <router-link to="/users" class="btn btn-secondary">USERS</router-link>
      <router-link to="/cars" class="btn btn-outline-dark">CARS</router-link>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      logoWidth: 70,
    }
  },
   methods: {
   },

   created() {
    eventBus.$on("resizeLogo", (val) => this.logoWidth = val)
   },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
