<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <label>ResizeLogo:
      <input @keyup.enter="resizeLogo" type="number" v-model="size">
    </label>
  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "NextLesson",
  props: {
    msg: String
  },

  data() {
    return {
      size: 0
    }
  },

  methods: {
    resizeLogo() {
      eventBus.$emit("resizeLogo", this.size)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
