<template>
  <div class="restoreForm">
    <div class="formHeading">
      <h6>Restore password</h6>
    </div>
    <form @submit.prevent="restorePassword">
      <div class="form-group">
        <label>Email address</label>
        <input type="text" class="form-control" v-model="restore.email" />
        <small class="form-text formAlert" v-if="$v.restore.email.$invalid&&showAlerts">
          <span v-if="!$v.restore.email.required">This field is required</span>
          <span v-else>Invalid email</span>
        </small>
      </div>
      <div class="form-group">
        <label>New password</label>
        <input type="password" class="form-control" v-model="restore.pass1" />
        <small class="form-text formAlert" v-if="$v.restore.pass1.$invalid&&showAlerts">
          <span v-if="!$v.restore.pass1.required">This field is required</span>
          <span v-else>Invalid password</span>
        </small>
      </div>
      <div class="form-group">
        <label>Confirm password</label>
        <input type="password" class="form-control" v-model="restore.pass2" />
        <small class="form-text formAlert" v-if="$v.restore.pass2.$invalid&&showAlerts">
          <span v-if="!$v.restore.pass2.required">This field is required</span>
          <span v-else>Invalid password</span>
        </small>
      </div>

      <div class="form-group btns d-flex mt-4">
        <button type="submit" class="btn btn-pr m-auto">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      showAlerts: false,
      restore: {
        email: null,
        pass1: null,
        pass2: null,
      },
    };
  },
  validations: {
    restore: {
      email: {
        required,
        email,
      },
      pass1: {
        required,
        minLength: minLength(3),
      },
      pass2: {
        required,
        minLength: minLength(3),
        sameAs: sameAs("pass1"),
      },
    },
  },
  methods: {
    restorePassword() {
      this.showAlerts = true;
    },
  },
};
</script>