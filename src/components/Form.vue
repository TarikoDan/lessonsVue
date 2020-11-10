<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <form @submit.prevent="submit"> My FORM:
      <p><label>Name:
        <input type="text" v-model="user.name">
      </label></p>
      <p><label>Email:
        <input type="email" v-model="user.email">
      </label></p>
      <input type="submit">
      <button>?</button>
    </form>

    <template v-for="item in user">
      {{item}}
    </template>

    <hr>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },

  name: "Form",

  data() {
    return {
      user: {
        name: "",
        email: "",
      }
    }
  },

  methods: {
    submit() {

    }
  }
}
</script>

<style scoped>

</style>
