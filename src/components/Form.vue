<template>
  <div class="hello">
    <h2 v-highlight="titleColor">{{ msg | toUpperCase}}</h2>

    <div class="d-flex justify-content-center">
      <div class="col-3 input-group shadow-sm">
        <button class="btn btn-outline-info" type="button">
          <span class="badge badge-pill text-wrap badge-warning ">Choose highlight Color</span>
        </button>
        <input type="color" class="form-control"
               v-model="titleColor"
               placeholder="Choose Color for Title background"
               aria-label="" aria-describedby="basic-addon1">
      </div>
      <div class="col-3 input-group shadow-sm">
        <input type="number" class="form-control"
               v-model="logoSize"
               placeholder="Choose Color for Title background"
               aria-label="" aria-describedby="basic-addon1">
        <button @click="resizeLogo" class="btn btn-outline-info " type="button">
          <span class="badge badge-pill text-wrap badge-info ">Choose LogoSize</span>
        </button>
      </div>
    </div>

<!--    Form User Container-->
    <div class="d-flex m-3">
    <div class="flex-fill border border-success">
      <form id="userForm" @submit.prevent><h4><span>{{isEdited ? 'EDIT' : 'ADD new'}}</span> USER FORM:</h4>
        <p><label>Name:
          <input type="text" v-model.lazy="user.name">
        </label></p>
        <p><label>Email:
          <input type="email" v-model.lazy="user.email">
        </label></p>
        <p><label>Age:
          <input type="number" v-model.lazy="user.age">
        </label></p>
        <p><label>Male:
            <input type="radio" v-model="user.gender" value="male">
          </label>
          <label>Female:
            <input type="radio" v-model="user.gender" value="female">
        </label></p>
        <p><label>Send news?:
            <input type="checkbox" v-model="user.news" value="news">
          </label>
          <label>Receive AD?:
            <input type="checkbox" v-model="user.news" value="advertising">
        </label></p>
        <p><label for="infoText"/><strong>INFO:</strong>
          <textarea
              id="infoText"
              rows="5"
              v-model="user.info"
          />
        </p>
        <input type="submit" @click="addNew"  class="btn btn-outline-success" v-show="!isEdited">
        <button @click="cleanForm" class="btn btn-outline-warning" v-show="!isEdited">clear Form</button>
        <button @click="sendEdited"  class="btn btn-outline-success" v-show="isEdited">EDIT USER</button>
      </form>
    </div>

<!--      form values container-->
      <div  class="flex-fill border border-info">
        <h4>USER Form's values...</h4>
        <div v-for="(item, i) in user" :key="i">
          <p class="text-left offset-1" style="white-space: pre-line">{{i}}:  {{ item }}</p>
        </div>
      </div>
    </div>

    <button @click="getAll" class="btn btn-primary btn-block col-6 mx-auto my-3">GET ALL</button>
    <ul v-for="user in users" :key="user.id" class="list-group">
      <li class="list-group-item">
        <span class="badge badge-dark">{{ user.name }} </span>
        - {{ user.email }} -- id: {{ user.id }}
        <button @click="edit(user)" class="btn btn-info">EDIT</button>
        <button @click="remove(user.id)" class="btn btn-danger">REMOVE</button>
      </li>
    </ul>

    <hr>
  </div>
</template>

<script>
import {Api} from "@/components/api";
import {eventBus} from '@/main'

export default {
  name: "Form",

  props: {
    msg: String
  },

  data() {
    return {
      titleColor: "#b5ff2e",
      logoSize: 100,
      isEdited: false,
      user: {
        name: "",
        email: "",
        age: '',
        gender: '',
        news: [],
        info: ''
      },
      users: [],
    }
  },

  methods: {
    async addNew() {
      let response = await Api.Forms.create(this.user);
      console.log(response)
      this.users.push({...this.user, id: response.body.name});
      this.cleanForm() /*because of @submit.prevent*/
    },

    async getAll() {
      let response = await Api.Forms.readAll();
      this.users = [];
      Object.entries(response.body).forEach(([key, value]) => this.users.push({...value, id: key}))
      console.log(this.users)
    },

    edit(user) {
      this.isEdited = true
      if (!(user.news instanceof Array)) {
        user.news = []
      }
      this.user = user
    },

    async sendEdited() {
      console.log(await Api.Forms.update(this.user.id, this.user));
      this.users = this.users.map((user) => user = user.id === this.user.id ? {...this.user} : user);
      this.isEdited = false;
      this.cleanForm()  /*because of @submit.prevent*/
    },

    async remove(id) {
      console.log(await Api.Forms.delete(id));
      let index = this.users.findIndex(value => value.id === id);
      this.users.splice(index, 1);
    },

    resizeLogo() {
      eventBus.$emit('resizeLogo', this.logoSize)
    },

    cleanForm() {
      Object.keys(this.user).forEach(key => {
        this.user[key] = key === 'news' ? [] : '';
      })
    }

  },

  beforeMount: async function () {
    await this.getAll()
  }

}
</script>

<style scoped>

</style>
