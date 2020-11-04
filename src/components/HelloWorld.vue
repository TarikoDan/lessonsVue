<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    {{ title }}
    <span v-once>{{title}}</span>

    <p v-once>{{ sayHello() }}</p>
    <label> Enter Your name:
      <input v-model="name">
    </label>
    <h2>{{ sayHello(name) }}</h2>

    <a v-if="counter === 0" href="https://cli.vuejs.org" target="_blank" >1 Vue-cli documentation</a>
    <a v-else-if="counter < 0" v-bind:href="documentationLink" target="_blank" >2 Vue-cli documentation</a>
    <a v-else :href='documentationLink' target="_blank" >3 Vue-cli documentation</a>
    <span v-html="html"></span>

    <span>{{computedResult}}</span>
    <button v-on:click="decrease(5)">MIN</button>
    <span id="counter" :class="counter>0 ? 'green' : 'red'">{{counter}}</span>
    <button v-on:click="increase()">ADD</button>
    <span>{{writeResult()}}</span>

    <div class="cube" v-on:mousemove="checkCoordinates" :style="changeable" >
      {{x}} - {{y}}
      <span @mousemove.stop class="red">FREEZE</span>
    </div>

    <div v-show="counter !== 0">
      <label>input your color:
        <input type="text"
             @keyup.enter=alert
             :title="sayHello()"
             v-model="colour"
             :style="{'color':colour, 'background': 'lightgrey'}">
      </label>
      <div :style="{display: 'flex', background: `RGB(${x-450},${y-350},100)`}">
        <div :class="{cube: true, red:selected}"></div>
        <div :class="[colour,{cube:true}]" @click="selected=!selected" :style="{'color':colour}">click me</div>
        <div :class="{cube: true, green:!selected}"></div>
      </div>
    </div>
    <ul>
      <li v-for="n in 10" :key="n">
        <span :ref="`ref${n}`">{{ n }}</span>
      </li>
      <li @click="showRefs()">check</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      title: "Hi!!",
      name: "Vue",
      documentationLink: "https://cli.vuejs.org",
      html: '<h3>this is title #3</h3>',
      counter: 0,
      x:0,
      y:0,
      selected: true,
      colour: "black",
    }
  },

  computed: {
    computedResult() {
      console.log("comp");
      return this.counter>5 ? "  more than 5" : "  less than 5"
    },
    changeable() {
      return {'background': `RGB(${(this.x-455)*255/100},${(this.y-350)*255/100},0)`}
    }
  },

  methods: {
    sayHello(name=this.name) {
      this.changeTitle("Hello, ")
      return this.title + name
    },
    changeTitle(s) {
      this.title = s
    },
    increase(x=1) {
      this.counter+=x
    },
    decrease(x=1) {
      this.counter-=x
    },
    checkCoordinates(event) {
      this.x=event.clientX;
      this.y=event.clientY;
    },
    alert(event) {
      console.log(event);
      alert(event.key)
    },
    writeResult() {
      console.log("res");
      return this.counter>5 ? "  more than 5" : "  less than 5"
    },
    showRefs() {
      console.log(this.$refs.ref1.values().next());
      console.log(this.$refs.ref2);
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
#counter {
  padding: 0 20px;
  border: 1px solid black;
}
.red {
  background: #ff8282;
}
.green {
  background: #7efa7e;
}
.white {
  background: white;
}
.cube {
  margin: 10px auto;
  width: 100px;
  height: 100px;
  border: 2px solid #42b983;
}

</style>
