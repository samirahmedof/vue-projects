<template>
  <div class="quickRegistration">
    <h4 class="mt-0 headerTitle">{{Page}}</h4>
    <div class="regForm">
      <form>
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" v-model="reg.name" />
              <small class="form-text formAlert" v-if="$v.reg.name.$invalid&&showAlerts">
                <span v-if="!$v.reg.name.required">This field is required</span>
                <span v-else>Invalid name</span>
              </small>
            </div>
            <div class="form-group">
              <label>Surname</label>
              <input type="text" class="form-control" v-model="reg.surname" />
              <small class="form-text formAlert" v-if="$v.reg.surname.$invalid&&showAlerts">
                <span v-if="!$v.reg.surname.required">This field is required</span>
                <span v-else>Invalid surname</span>
              </small>
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="text" class="form-control" v-model="reg.phone" />
              <small class="form-text formAlert" v-if="$v.reg.phone.$invalid&&showAlerts">
                <span v-if="!$v.reg.phone.required">This field is required</span>
                <span v-else>Invalid phone</span>
              </small>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label>Email address</label>
              <input type="text" class="form-control" v-model="reg.email" />
              <small class="form-text formAlert" v-if="$v.reg.email.$invalid&&showAlerts">
                <span v-if="!$v.reg.email.required">This field is required</span>
                <span v-else>Invalid email</span>
              </small>
            </div>
            <div class="form-group">
              <label>City</label>
              <select class="form-control" v-model="reg.city">
                <option disabled selected>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <small class="form-text formAlert" v-if="$v.reg.city.$invalid&&showAlerts">
                <span v-if="!$v.reg.city.required">This field is required</span>
                <span v-else>Invalid city</span>
              </small>
            </div>
            <div class="form-group">
              <label>Organisation</label>
              <input type="text" class="form-control" v-model="reg.org" />
              <small class="form-text formAlert" v-if="$v.reg.org.$invalid&&showAlerts">
                <span v-if="!$v.reg.org.required">This field is required</span>
                <span v-else>Invalid org</span>
              </small>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group btns d-flex mt-4">
              <button
                type="button"
                class="btn btn-pr m-auto"
                @click.prevent="checkRegistration"
              >Registration</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <b-modal id="regModal" size="sm" hide-header hide-footer centered>
      <div class="buttons">
        <button class="btn btn-pr" @click="selectedBtn">Select1</button>
        <button class="btn btn-pr" @click="selectedBtn">Select2</button>
        <button class="btn btn-pr" @click="selectedBtn">Select3</button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import {
  required,
  email,
  minLength,
  sameAs,
  withParams,
} from "vuelidate/lib/validators";
const isPhone = (value) => /^\+?[0-9]+$/.test(value);
export default {
  data() {
    return {
      Page: "Quick Registration",
      showAlerts: false,
      reg: {
        email: null,
        org: null,
        name: null,
        surname: null,
        phone: null,
        city: null,
      },
      forgotPasswordEmail: null,
    };
  },
  validations: {
    reg: {
      email: {
        required,
        email,
      },
      phone: {
        required,
        phoneValid: isPhone,
        minLength: minLength(8),
      },
      city: {
        required,
      },
      name: {
        required,
      },
      surname: {
        required,
      },
      org: {
        required,
      },
    },
  },
  methods: {
    checkRegistration() {
      if (this.$v.$invalid) {
        this.showAlerts = true;
      } else {
        this.$bvModal.show("regModal");
      }
    },
    selectedBtn() {
      this.$router.push("/catalog");
    },
  },
};
</script>