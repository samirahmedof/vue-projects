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
            <td>Name</td>
            <td>
              <div class="input-group">
                <select class="form-control gender" v-model="currentUserData.gender">
                  <option disabled selected value="0">Select</option>
                  <option value="1">Mr.</option>
                  <option value="2">Mrs.</option>
                </select>
                <input type="text" class="form-control" style="width: 60%" v-model="currentUserData.name" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Surname</td>
            <td>
              <input type="text" class="form-control" :value="currentUserData.surname" />
            </td>
          </tr>
          <tr>
            <td>Patronomic</td>
            <td>
              <input type="text" class="form-control" :value="currentUserData.patronomic" />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="text" class="form-control" :value="currentUserData.email" />
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>
              <input type="text" class="form-control" :value="currentUserData.phone" />
            </td>
          </tr>
          <tr>
            <td>Organisation</td>
            <td>
              <input type="text" class="form-control" :value="currentUserData.org" />
            </td>
          </tr>
          <tr>
            <td>Vat number</td>
            <td>
              <input type="text" class="form-control" :value="currentUserData.tin" />
            </td>
          </tr>
          <tr>
            <td>Legal address</td>
            <td>
              <input type="text" class="form-control" :value="currentUserData.legalAddress" />
            </td>
          </tr>
          <tr>
            <td>Actual address</td>
            <td>
              <input type="text" class="form-control" :value="currentUserData.actualAddress" />
            </td>
          </tr>
          <tr>
            <td>Country</td>
            <td>
              <select class="form-control" v-model="currentUserData.country">
                <option disabled selected>Select</option>
                <option value="country1">1</option>
                <option value="country2">2</option>
                <option value="country3">3</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>City</td>
            <td>
              <input type="text" class="form-control" v-model="currentUserData.city" />
            </td>
          </tr>
          <tr v-for="(address,index) in currentUserData.shipping" :key="index">
            <td>Shipping address {{index+1}}</td>
            <td>
              <input type="text" class="form-control" :value="address" v-if="index==0" />
              <div class="input-group" v-else>
                <input type="text" class="form-control" :value="address" />
                <div class="input-group-append">
                  <span class="input-group-text" @click="removeShippingAddress(index)">
                    <i class="fas fa-times"></i>
                  </span>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td class="border-bottom-0"></td>
            <td class="text-right border-bottom-0">
              <button class="btn btn-pr btn-sm" @click="addNewShippingAddress">+Add new</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="changePassBtn text-center">
        <button class="btn btn-pr" @click="changePassword=true">Change password</button>
        <button class="btn btn-pr">Save</button>
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
import {
  numeric,
  required,
  email,
  minLength,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      Page: "User profile",
      showAlerts: false,
      changePassword: false,
      currentUserData: {},
      restore: {
        email: null,
        pass1: null,
        pass2: null,
      },
    };
  },
  validations: {
    currentUserData: {
      phone: {
        numeric,
      },
    },
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
  computed: {
    userData() {
      return this.$store.getters.getActiveUser;
    },
  },
  created() {
    this.currentUserData = this.userData;
  },
  methods: {
    addNewShippingAddress() {
      if (this.currentUserData.shipping.length < 5) {
        this.currentUserData.shipping.push("");
      }
    },
    removeShippingAddress(e) {
      this.currentUserData.shipping.splice(e, 1);
    },
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