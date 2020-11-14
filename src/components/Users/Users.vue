<template>
  <div class="hello">
    <h2>USERS Page</h2>

    <ul v-for="(user, i) in users" :key="user.id"
        class="list-group list-group-flush"
    >
      <li class="list-group-item">
        {{ user.name }} - {{ user.email }} -- id: {{ user.id }}
        <router-link :to="{name: 'user', params: {id: i+1, user:{...user, index: i+1}}}" class="btn btn-outline-info" >SHOW</router-link>
        <button @click="remove(user.id)" class="btn btn-outline-danger">REMOVE</button>
      </li>
    </ul>

    <router-link to="users/new"
                 class="btn btn-outline-success btn-block col-sm-6 offset-sm-3"
                 data-toggle="modal"
                 data-target="#newUser"
    >
      Add NEW
    </router-link>
    <router-view></router-view>

    <hr>
  </div>
</template>

<script>
import {Api} from "@/components/api";
import {eventBus} from "@/main";

export default {
  name: "Users",

  props: {
  },

  data() {
    return {
      users: [],
    }
  },

  methods: {

    async getAll() {
      let response = await Api.Users.readAll();
      this.users = [];
      Object.entries(response.body).forEach(([key, value]) => this.users.push({...value, id: key}))
      console.log(this.users)
    },

    addNew(user) {
      console.log("added")
      this.users.push(user)
    },

    async remove(id) {
      console.log(await Api.Users.delete(id));
      let index = this.users.findIndex(value => value.id === id);
      this.users.splice(index, 1);
    },

  },

  beforeMount: async function () {
    await this.getAll()
  },

  created() {
    eventBus.$on("addNew", (val) => this.addNew(val))
  }

}
</script>

<style scoped>

</style>
