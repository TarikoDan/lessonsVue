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
      <p>Counter with MIXIN</p>
      <span>{{ computedResult }}</span>
      <button v-on:click="decrease(5)">MIN</button>
      <span style="width: 50px; display: inline-block" id="counter" :class="counter>0 ? 'green' : 'red'">{{ counter }}</span>
      <button v-on:click="increase()">ADD</button>
      <span>{{ writeResult() }}</span>
    </div>

    <div class="col-6 mx-auto border border-dark p-3">
      <h4><span class="badge badge-info">Counter with Vuex</span></h4>
      <div>
        <button class="btn btn-outline-danger" @click="minus">MIN</button>
        <h2 class="d-inline-block w-25"><span class="badge badge-info rounded-circle">
          {{ result }}
        </span></h2>
        <button @click="plus" class="btn btn-outline-success">ADD</button>
        <p><label>Multiply:
          <!--          <input type="number" @click="multiply(x)" v-model="x">-->
          {{ multi }}
        </label></p>
        {{string}}
      </div>
    </div>

    <hr>
  </div>
</template>

<script>
import {eventBus} from "@/main";
import {Counter} from "@/components/mixins/CounterMixin.vue";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "NextLesson",
  props: {
    msg: String
  },

  data() {
    return {
      size: 0,
      x: 1
    }
  },

  mixins: [Counter],

  computed: {
    result() {
      return this.$store.state.counterX
    },
    ...mapGetters({
      multi: 'multiCounter',
      string: 'stringCount'
    }),
    // multiply() {
    //   return (this.$store.getters.multiCounter)
    // },
    // click() {
    //   return (this.$store.getters.stringCount)
    // },

  },

  methods: {
    resizeLogo() {
      eventBus.$emit("resizeLogo", this.size)
    },

    ...mapMutations({
      plus: 'increment',
      minus: 'decrement'
    }),

    // decrem() {
    //   this.$store.commit("decrement")
    // },
    // increm() {
    //   this.$store.commit("increment")
    // },

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
