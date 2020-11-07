<template>
  <div class="userProfile">
    <div class="row justify-content-center">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
      </div>
      <div class="col-7">
        <transition
          enter-active-class="animate__animated animate__fadeInLeft animate__faster"
          leave-active-class="animate__animated animate__fadeOutRight animate__faster"
          mode="out-in"
        >
          <div
            class="about"
            v-if="!changePassword"
            key="about"
            :class="{'disableProfile':$store.getters.getUserStatus=='manager'}"
          >
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
                      <input
                        type="text"
                        class="form-control"
                        style="width: 60%"
                        v-model="currentUserData.name"
                      />
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
                  <td>Patronymic</td>
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
                  <td>Company</td>
                  <td>
                    <input type="text" class="form-control" :value="currentUserData.org" />
                  </td>
                </tr>
                <tr>
                  <td>Vat Number</td>
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
                    <input type="text" class="form-control" :value="currentUserData.city" />
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

                <tr v-if="$store.getters.getUserStatus!='manager'">
                  <td class="border-bottom-0"></td>
                  <td class="text-right border-bottom-0">
                    <button class="btn btn-pr btn-sm" @click="addNewShippingAddress">+Add new</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="changePassBtn text-center" v-if="$store.getters.getUserStatus!='manager'">
              <button class="btn btn-pr">Save</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { numeric } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      Page: "User profile",
      showAlerts: false,
      changePassword: false,
      restore: {
        email: null,
        pass1: null,
        pass2: null,
      },
      currentUserData: null,
      currentUser: this.$route.params.id,
    };
  },
  validations: {
    currentUserData: {
      phone: {
        numeric,
      },
    },
  },
  created() {
    this.currentUserData = this.users[this.currentUser];
  },
  computed: {
    users() {
      return [
        {
          id: "1",
          name: "name 1",
          gender: "2",
          surname: "surname 1",
          patronomic: "patr 1",
          email: "email 1",
          phone: "+994 55 987 65 43",
          org: "org 1",
          tin: "tin 1",
          legalAddress: "l.a 1",
          actualAddress: "a.a 1",
          country: "country1",
          city: "city1",
          shipping: ["shipping 1-1", "shipping 1-2", "shipping 1-3"],
        },
        {
          id: "2",
          name: "name 2",
          gender: "1",
          surname: "surname 2",
          patronomic: "patr 2",
          email: "email 2",
          phone: "+994 55 987 65 43",
          org: "org 2",
          tin: "tin 2",
          legalAddress: "l.a 2",
          actualAddress: "a.a 2",
          country: "country2",
          city: "city2",
          shipping: ["shipping 2-1", "shipping 2-2", "shipping 2-3"],
        },
        {
          id: "3",
          name: "name 3",
          gender: "2",
          surname: "surname 3",
          patronomic: "patr 3",
          email: "email 3",
          phone: "+994 55 987 65 43",
          org: "org 3",
          tin: "tin 3",
          legalAddress: "l.a 3",
          actualAddress: "a.a 3",
          country: "country3",
          city: "city3",
          shipping: ["shipping 3-1", "shipping 3-2", "shipping 3-3"],
        },
        {
          id: "4",
          name: "name 4",
          gender: "1",
          surname: "surname 4",
          patronomic: "patr 4",
          email: "email 4",
          phone: "+994 55 987 65 43",
          org: "org 4",
          tin: "tin 4",
          legalAddress: "l.a 4",
          actualAddress: "a.a 4",
          country: "country4",
          city: "city4",
          shipping: ["shipping 4-1", "shipping 4-2", "shipping 4-3"],
        },
        {
          id: "5",
          name: "name 5",
          gender: "1",
          surname: "surname 5",
          patronomic: "patr 5",
          email: "email 5",
          phone: "+994 55 987 65 43",
          org: "org 5",
          tin: "tin 5",
          legalAddress: "l.a 5",
          actualAddress: "a.a 5",
          country: "country5",
          city: "city5",
          shipping: ["shipping 5-1", "shipping 5-2", "shipping 5-3"],
        },
      ];
    },
  },
  methods: {
    addNewShippingAddress() {
      if (this.users[this.currentUser].shipping.length < 5) {
        this.users[this.currentUser].shipping.push("");
      }
    },
    removeShippingAddress(e) {
      this.users[this.currentUser].shipping.splice(e, 1);
    },
  },
};
</script>