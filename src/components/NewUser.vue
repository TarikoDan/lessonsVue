<template>
  <div>

    <!-- Modal -->
    <div class="modal" id="newUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Enter your registration details: </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div class="row justify-content-sm-center">
              <form @submit="submit">
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

const def = {
  name: "",
  email: "",
}

export default {
  name: "NewUser",

  data() {
    return {
      user: def,
    }
  },

  methods: {
    async submit() {
      let response = await Api.Users.create(this.user);
      console.log(response);
      eventBus.$emit("addNew", {...this.user, id: response.body.name})
    },

  }

}
</script>

<style scoped>

</style>
