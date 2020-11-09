<template>
  <div id="app">
    <img ref="logo" :width="logoWidth" alt="Vue logo" src="./assets/logo.png">
    <template v-for="(less, i) in lessons">
      <label :key="i"> {{ less.title }}
        <input type="checkbox" v-model="less.show">
      </label>
    </template>
    <button @click="showLesson">Show</button>
    <HelloWorld msg="let's explore Vue.js !" v-show="lessons[0].show"/>
    <NextLesson msg="Second Lesson" v-show="lessons[1].show"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NextLesson from "@/components/NextLesson";
import {eventBus} from "@/main";

export default {
  name: 'App',
  components: {
    HelloWorld,
    NextLesson
  },
  data() {
    return {
      logoWidth: 100,
      lessons: [
        {title:'lesson1', show: true},
        {title:'lesson2', show: true},
        {title:'lesson3', show: true},
      ]
    }
  },
   methods: {
     showLesson() {
       // this.$refs.less1.style.display = "none";
     }
   },

   created() {
    eventBus.$on("resizeLogo", (val) => {
      this.logoWidth = val

    });
    if (!this.$refs.logo) {
      console.log("This doesn't exist yet!");
    }

    this.$nextTick(() => {
      if (this.$refs.logo) {
        console.log("Now it does!");
      }
  })},

  mounted() {
    console.log("Now its mounted");
  }
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
</style>
