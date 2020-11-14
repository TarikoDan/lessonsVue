<template>
  <div class="container">
    <button @click="go(-1)" class="btn btn-outline-info">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
      </svg>
      BACK
    </button>
    <div class="card border-dark mx-auto my-5" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="src/assets/logo.png" class="card-img" alt="UserPhoto">
        </div>
        <div class="col-md-8">
<!--      <div class="card-header">User Details...</div>-->
          <div class="card-body text-dark">
            <h4 class="card-title">Number: {{ user.index }}</h4>
            <h5 class="card-text">Name: {{ user.name }}</h5>
            <p class="card-text">Email: {{ user.email }}</p>
            <h6 class="card-text">ID: {{ user.id }}</h6>
            <router-link :to="{name: 'edit', params: {id: user.index, user}}"
                         class="btn btn-outline-info"
                         data-toggle="modal"
                         data-target="#editUser"
            >Edit
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "User",

  props: {
    user: Object
  },

  data() {
    return {
    }
  },
   methods: {
    go(delta) {
      this.$router.go(delta)
    }
   },

}
</script>

<style scoped>

</style>
