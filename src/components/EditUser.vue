<template>
  <div>
    <!-- Modal -->
    <div class="modal" id="editUser" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">Edit your registration details: </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div class="row justify-content-sm-center">
              <form @submit="edit(user.id)">
                <div class="form-group row">
                  <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10">
                    <input type="text" v-model="user.name" class="form-control" id="inputName" placeholder="Name">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="email" v-model="user.email" class="form-control" id="inputEmail3" placeholder="Email">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-10 offset-sm-2">
                    <button type="submit" class="btn btn-primary">SUBMIT</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import {Api} from "@/components/api";
import {eventBus} from "@/main";


export default {
  name: "NewUser",

  props: {
    user: Object
  },

  data() {
    return {
    }
  },

  methods: {
    async submit() {
      let response = await Api.Users.create(this.user);
      console.log(response);
      eventBus.$emit("addNew", {...this.user, id: response.body.name})
    },

    async edit(id) {
      let response = await Api.Users.update(id, this.user);
      console.log(response);
      await this.$router.push({name: 'user', props: this.user})
      // this.users = this.users.map((user) => user = user.id === id ? {...this.user, id: id} : user);
    },

  },

}
</script>

<style scoped>

</style>
