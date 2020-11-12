<template>
  <div class="container">
    <div class="card border-dark" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="../assets/logo.png" class="card-img" alt="UserPhoto">
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

   },

}
</script>

<style scoped>

</style>
