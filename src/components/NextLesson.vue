<template>
  <div class="hello">
    <h1 v-highlight="'greenyellow'">{{ msg | toUpperCase}}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <label>ResizeLogo:
      <input @keyup.enter="resizeLogo" type="number" v-model="size">
    </label>

    <div class="counter">
      <span>{{ computedResult }}</span>
      <button v-on:click="decrease(5)">MIN</button>
      <span style="width: 50px; display: inline-block" id="counter" :class="counter>0 ? 'green' : 'red'">{{ counter }}</span>
      <button v-on:click="increase()">ADD</button>
      <span>{{ writeResult() }}</span>
    </div>

    <hr>
  </div>
</template>

<script>
import {eventBus} from "@/main";
import {Counter} from "@/components/mixins/CounterMixin.vue";

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

  mixins: [Counter],

  methods: {
    resizeLogo() {
      eventBus.$emit("resizeLogo", this.size)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter {
  margin: 20px auto;
  padding: 10px;
  border: 2px inset #42b983;
  width: 50%;
}
a {
  color: #42b983;
}
.red {
  background: #ff8282;
}
.green {
  background: #7efa7e;
}

</style>
