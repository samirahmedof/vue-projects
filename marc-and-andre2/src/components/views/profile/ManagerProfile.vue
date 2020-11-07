<template>
  <transition
    enter-active-class="animate__animated animate__fadeInLeft animate__faster"
    leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    mode="out-in"
  >
    <div class="about" v-if="!changePassword" key="about">
      <table class="table mb-3">
        <tbody>
          <tr>
            <td>Fullname</td>
            <td>{{userData.fullname}}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{{userData.country}}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{{userData.city}}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{userData.email}}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{{userData.phone}}</td>
          </tr>
          <tr>
            <td>Sales manager</td>
            <td>"Name Surname"</td>
          </tr>
        </tbody>
      </table>
      <div class="changePassBtn text-center">
        <button class="btn btn-pr" @click="changePassword=true">Change password</button>
      </div>
    </div>
    <div class="changePassword" v-else key="pass">
      <div class="restoreForm">
        <form @submit.prevent="submitPassword">
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
            <button
              type="button"
              class="btn btn-pr m-auto"
              @click="changePassword=false"
            >Go to profile</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>
<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      showAlerts: false,
      changePassword: false,
      restore: {
        email: null,
        pass1: null,
        pass2: null,
      },
    };
  },
  computed: {
    userData() {
      return this.$store.getters.getActiveUser;
    },
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
    submitPassword() {
      if (this.$v.$invalid) {
        this.showAlerts = true;
      } else {
        this.changePassword = false;
      }
    },
  },
};
</script>