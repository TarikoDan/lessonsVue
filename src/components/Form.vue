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

    <div v-for="(item, i) in user" :key="i">
      {{ item }}<br>
    </div>

    <button @click="getAll">GET ALL</button>
    <ul v-for="user in users" :key="user.id">
      <li>
        {{ user.name }} - {{ user.email }} -- id: {{ user.id }}
        <button @click="edit(user.id)">EDIT</button>
        <button @click="remove(user.id)">REMOVE</button>
      </li>
    </ul>

    <hr>
  </div>
</template>

<script>
import {Api} from "@/components/api";

const def = {
  name: "",
  email: "",
}

export default {
  name: "Form",

  props: {
    msg: String
  },

  data() {
    return {
      user: def,
      users: [],
    }
  },

  methods: {
    async submit() {
      // this.$http.post('users.json', this.user)
      let response = await Api.Users.create(this.user);
      console.log(response);
      this.users.push({...this.user, id: response.body.name})
    },

    async getAll() {
      let response = await Api.Users.readAll();
      this.users = [];
      Object.entries(response.body).forEach(([key, value]) => this.users.push({...value, id: key}))
      console.log(this.users)
    },

    async edit(id) {
      console.log(await Api.Users.update(id, this.user));
      this.users = this.users.map((user) => user = user.id === id ? {...this.user, id: id} : user);
    },

    async remove(id) {
      console.log(await Api.Users.delete(id));
      let index = this.users.findIndex(value => value.id === id);
      this.users.splice(index, 1);
    },

  },

  beforeMount: async function () {
    await this.getAll()
  }

}
</script>

<style scoped>

</style>
