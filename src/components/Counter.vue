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

<!--    VUEX-->
    <div class="col-6 mx-auto border border-dark p-3">
      <h4><span class="badge badge-info">Counter with Vuex</span></h4>
      <button @click="minus(1)" class="btn btn-outline-danger" >MIN</button>
      <h2 class="d-inline-block w-25">
        <span :class="[result<0 ? 'badge-danger' : 'badge-success', 'badge',  'rounded-circle']">
        {{ result }}
        </span>
      </h2>
      <button @click="plus(1)" class="btn btn-outline-success">ADD</button>
      <h5>
        <span @click="resetCounter" class="badge badge-warning rounded-pill">reset Counter</span>
      </h5>
      <p>Circumference <strong>L = {{ circuit }}</strong> with radius r = {{result}}</p>
      <p>CircleArea <strong>S = {{ circleArea }}</strong> with radius r = {{result}}</p>
      <p>
        <label><input type="number" @keyup.enter="plusX" v-model="x"></label>
      </p>
      <p>Action with Value 10 & TimeOut 2000:
          <button @click="incTimeout(10, 2000)" class="btn btn-dark">incACT</button>
      </p>

      <span class="badge badge-dark rounded-pill">{{ clicks }}</span>
      <span @click="resetClicks" class="badge badge-warning rounded-pill">reset clicks</span>
    </div>

    <hr>
  </div>
</template>

<script>
import {eventBus} from "@/main";
import {CounterMixin} from "@/components/mixins/CounterMixin.vue";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Counter",
  props: {
    msg: String
  },

  data() {
    return {
      size: 0,
      x: 0
    }
  },

  mixins: [CounterMixin],

  computed: {
    result() {
      return this.$store.state.counterX
    },
    ...mapGetters({
      circuit: 'circuit',
      circleArea: 'circleArea',
      clicks: 'clicks'
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
      minus: 'decrement',
      resetClicks: "resetClicks",
      resetCounter: "resetCounter",
    }),

    plusX() {
      let x = parseInt(this.x)
      this.plus(x)
      this.x = 0
    },

    // decrem() {
    //   this.$store.commit("decrement")
    // },
    // increm() {
    //   this.$store.commit("increment")
    // },

    incTimeout(value, timeOut) {
      this.$store.dispatch("incTimeout", {value, timeOut})
    },

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
