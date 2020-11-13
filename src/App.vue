<template>
  <div id="app">
    <img ref="logo" :width="logoWidth" alt="Vue logo" src="./assets/logo.png">

<!--    <button @click="showLesson">Show</button>-->
    <Form msg="Form consult" />

  </div>
</template>

<script>
import {eventBus} from "@/main";
import Form from "@/components/Form";

export default {
  name: 'App',
  components: {
    Form,
  },
  data() {
    return {
      logoWidth: 100,
    }
  },
  created() {
   eventBus.$on("resizeLogo", (val) => {
     this.logoWidth = val
   });
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
