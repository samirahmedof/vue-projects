<template>
  <div class="loginPage">
    <transition
      enter-active-class="animate__animated animate__fadeInLeft animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
      mode="out-in"
    >
      <div class="loginForm" v-if="showLoginForm&&!forgotPassword" key="login">
        <div class="formHeading">
          <h6>Login</h6>
        </div>
        <form v-if="showForm" @submit.prevent="checkUser">
          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              v-model="login.email"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="login.pass" />
          </div>
          <transition
            enter-active-class="animate__animated animate__fadeInDown animate__faster"
            leave-active-class="animate__animated animate__fadeOutUp animate__faster"
            mode="out-in"
          >
            <div class="waitingAlert" v-if="invalidLogin">
              <p>Invalid email or password</p>
            </div>
          </transition>
          <transition
            enter-active-class="animate__animated animate__fadeInDown animate__faster"
            leave-active-class="animate__animated animate__fadeOutUp animate__faster"
            mode="out-in"
          >
            <div class="form-group forgot" v-if="correctEmail">
              <a href="#" title="Forgot password?" @click.prevent="goToForgotPass">Forgot password?</a>
            </div>
          </transition>
          <div class="form-group btns d-flex mt-4">
            <button type="submit" class="btn btn-pr mr-auto">Submit</button>
            <button
              type="button"
              class="btn btn-pr ml-auto"
              @click.prevent="showLoginForm=false"
            >Registration</button>
          </div>
          <transition
            enter-active-class="animate__animated animate__fadeInDown animate__faster"
            leave-active-class="animate__animated animate__fadeOutUp animate__faster"
            mode="out-in"
          >
            <div class="form-group incorrectEmail mt-4" v-if="!correctEmail">
              <p>There is no registration on the site for this e-mail. Want to register?</p>
              <div class="btnRow d-flex justify-content-center">
                <button type="button" class="btn btn-pr" @click.prevent="showLoginForm=false">Yes</button>
                <button type="button" class="btn btn-pr" @click.prevent="correctEmail=true">No</button>
              </div>
            </div>
          </transition>
        </form>
        <div class="waitingAlert" v-else>
          <p>Your account has been created but not yet verified. Please wait for its activation, you will receive a notification to the specified mail.</p>
        </div>
      </div>
      <div class="regForm" v-if="!showLoginForm&&!forgotPassword" key="reg">
        <div class="formHeading">
          <h6>Registration</h6>
        </div>
        <form>
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>Email address</label>
                <input type="text" class="form-control" v-model="reg.email" />
                <small class="form-text formAlert" v-if="$v.reg.email.$invalid&&showAlerts">
                  <span v-if="!$v.reg.email.required">This field is required</span>
                  <span v-else>Invalid email</span>
                </small>
                <small class="form-text formAlert" v-if="existsEmailAlert">
                  <span>This e-mail address already exists</span>
                </small>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="reg.pass1" />
                <small class="form-text formAlert" v-if="$v.reg.pass1.$invalid&&showAlerts">
                  <span v-if="!$v.reg.pass1.required">This field is required</span>
                  <span v-else>Invalid password</span>
                </small>
              </div>
              <div class="form-group">
                <label>Confirm password</label>
                <input type="password" class="form-control" v-model="reg.pass2" />
                <small class="form-text formAlert" v-if="$v.reg.pass2.$invalid&&showAlerts">
                  <span v-if="!$v.reg.pass2.required">This field is required</span>
                  <span v-else>Invalid password</span>
                </small>
              </div>
              <div class="form-group">
                <label>Company</label>
                <input type="text" class="form-control" v-model="reg.org" />
              </div>
              <div class="form-check form-group">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="tnCheck"
                  v-model="reg.hasNotTIN"
                />
                <label class="form-check-label" for="tnCheck">I have not number</label>
              </div>
              <transition
                enter-active-class="animate__animated animate__fadeInDown animate__faster"
                leave-active-class="animate__animated animate__fadeOutUp animate__faster"
                mode="out-in"
              >
                <div class="form-group" v-if="!reg.hasNotTIN">
                  <label>Vat Number</label>
                  <input type="text" class="form-control" v-model="reg.tin" />
                </div>
              </transition>

              <div class="form-group">
                <label>Legal address</label>
                <input type="text" class="form-control" v-model="reg.address" />
                <small class="form-text formAlert" v-if="$v.reg.address.$invalid&&showAlerts">
                  <span v-if="!$v.reg.address.required">This field is required</span>
                  <span v-else>Invalid address</span>
                </small>
              </div>
              <div class="form-group">
                <label>Actual address (only for Ukraine, RF and Kazakhstan)</label>
                <input type="text" class="form-control" v-model="reg.activeAddress" />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Name</label>
                <div class="input-group">
                  <select class="form-control gender" v-model="reg.gender">
                    <option disabled selected value="0">Select</option>
                    <option value="1">Mr.</option>
                    <option value="2">Mrs.</option>
                  </select>
                  <input type="text" class="form-control" style="width: 60%" v-model="reg.name" />
                </div>
              </div>
              <div class="form-group">
                <label>Surname</label>
                <input type="text" class="form-control" v-model="reg.surname" />
              </div>
              <div class="form-group">
                <label>Patronymic</label>
                <input type="text" class="form-control" v-model="reg.patronymic" />
              </div>
              <div class="form-group">
                <label>Country</label>
                <select class="form-control" v-model="reg.country">
                  <option disabled selected>Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <small class="form-text formAlert" v-if="$v.reg.country.$invalid&&showAlerts">
                  <span v-if="!$v.reg.country.required">This field is required</span>
                  <span v-else>Invalid country</span>
                </small>
              </div>
              <div class="form-group">
                <label>City</label>
                <input type="text" class="form-control" v-model="reg.city" />
                <small class="form-text formAlert" v-if="$v.reg.city.$invalid&&showAlerts">
                  <span v-if="!$v.reg.city.required">This field is required</span>
                  <span v-else>Invalid city</span>
                </small>
              </div>
              <div class="form-group">
                <label>Phone</label>
                <div class="input-group">
                  <input type="text" class="form-control" v-model="region" />
                  <input type="text" class="form-control" style="width: 60%" v-model="reg.phone" />
                </div>
                <small class="form-text formAlert" v-if="$v.reg.phone.$invalid&&showAlerts">
                  <span v-if="!$v.reg.phone.required">This field is required</span>
                  <span v-else>Invalid phone</span>
                </small>
              </div>

              <!-- <div class="form-group">
                <label>Delivery address</label>
                <input type="text" class="form-control mb-2" v-model="reg.delivery" />

                <transition-group
                  enter-active-class="animate__animated animate__fadeInDown animate__faster"
                  leave-active-class="animate__animated animate__fadeOutDown animate__faster"
                  mode="out-in"
                >
                  <div class="input-group mb-2" v-for="input in addressInputs" :key="input.id">
                    <input type="text" class="form-control" />
                    <div class="input-group-append">
                      <span class="input-group-text" @click="removeInput(input.id)">
                        <i class="fas fa-times"></i>
                      </span>
                    </div>
                  </div>
                </transition-group>
                <small class="form-text formAlert" v-if="$v.reg.delivery.$invalid&&showAlerts">
                  <span v-if="!$v.reg.delivery.required">This field is required</span>
                  <span v-else>Invalid delivery</span>
                </small>
                <div class="addNew">
                  <button class="btn btn-pr" @click.prevent="addNewInput">+Add new</button>
                </div>
              </div>-->
              <div class="form-check form-group">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="termsCheck"
                  v-model="reg.acceptRules"
                />
                <label class="form-check-label" for="termsCheck">
                  <a
                    href="#"
                    title="I agree with the rules for processing personal data"
                    @click.prevent
                  >I agree with the rules for processing personal data</a>
                </label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group btns d-flex mt-4">
                <button
                  type="button"
                  class="btn btn-pr m-auto"
                  @click.prevent="checkRegistration"
                  :disabled="!reg.acceptRules"
                >Registration</button>
              </div>
            </div>
          </div>
        </form>
        <div class="backToLogin" @click="backToLogin">
          <i class="fas fa-angle-left"></i> Back to login
        </div>
      </div>
      <div class="forgotPassForm" v-if="forgotPassword" key="restorePass">
        <div class="formHeading">
          <h6>Restore password</h6>
        </div>
        <form @submit.prevent="checkUserForRestore">
          <div class="form-group">
            <label>Email address</label>
            <input
              type="text"
              class="form-control"
              v-model="forgotPasswordEmail"
              @blur="$v.forgotPasswordEmail.$touch()"
            />
            <small
              class="form-text formAlert"
              v-if="$v.forgotPasswordEmail.$invalid&&$v.forgotPasswordEmail.$dirty"
            >
              <span v-if="!$v.forgotPasswordEmail.required">This field is required</span>
              <span v-else>Invalid email</span>
            </small>
          </div>

          <div class="form-group btns d-flex mt-4">
            <button
              type="submit"
              class="btn btn-pr mr-auto"
              :disabled="$v.forgotPasswordEmail.$invalid"
              @click="sendNewPass"
            >Send new</button>
            <button
              type="button"
              class="btn btn-pr ml-auto"
              @click.prevent="backToLogin"
            >Back to login</button>
          </div>
          <div class="form-group incorrectEmail mt-4" v-if="incorrectEmailForForgotPass">
            <p>There is no registration on the site for this e-mail. Want to register?</p>
            <div class="btnRow d-flex justify-content-center">
              <button type="button" class="btn btn-pr" @click.prevent="goToRegistration">Yes</button>
              <button
                type="button"
                class="btn btn-pr"
                @click.prevent="incorrectEmailForForgotPass=false"
              >No</button>
            </div>
          </div>
        </form>
      </div>
    </transition>
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
      correctEmail: true,
      showForm: true,
      showLoginForm: true,
      forgotPassword: false,
      incorrectEmailForForgotPass: false,
      addressInputs: [],
      invalidLogin: false,
      showAlerts: false,
      login: {
        email: null,
        pass: null,
      },
      region: "+994",
      reg: {
        email: null,
        pass1: null,
        pass2: null,
        org: null,
        hasNotTIN: false,
        tin: null,
        address: null,
        activeAddress: null,
        gender: "0",
        name: null,
        surname: null,
        patronymic: null,
        phone: null,
        country: null,
        city: null,
        delivery: null,
        acceptRules: false,
      },
      forgotPasswordEmail: null,
      existsEmailAlert: false,
    };
  },
  validations: {
    reg: {
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
      address: {
        required,
      },
      phone: {
        required,
        phoneValid: isPhone,
        minLength: minLength(8),
      },
      country: {
        required,
      },
      city: {
        required,
      },
    },
    login: {
      email: {
        required,
        email,
      },
      pass: {
        required,
        minLength: minLength(3),
      },
    },
    forgotPasswordEmail: {
      required,
      email,
    },
  },
  methods: {
    checkUser() {
      this.invalidLogin = false;
      this.correctEmail = true;
      if (this.$v.login.$invalid) {
        this.invalidLogin = true;
      } else {
        var users = this.$store.getters.getUsers;
        var activeUser = null;
        for (let i = 0; i < users.length; i++) {
          if (
            users[i].email == this.login.email &&
            users[i].pass == this.login.pass
          ) {
            activeUser = users[i];
            break;
          }
        }
        if (activeUser) {
          this.correctEmail = false;
          this.$store.commit("changeLogged", activeUser);
          if (activeUser.status == "user") {
            this.$router.push("/orders");
          } else {
            this.$router.push("/users");
          }
        } else {
          this.invalidLogin = true;
        }
      }
    },
    checkUserForRestore() {
      this.incorrectEmailForForgotPass = true;
    },
    addNewInput() {
      if (this.addressInputs.length < 4) {
        if (this.addressInputs.length) {
          var newInput = {
            id: this.addressInputs[this.addressInputs.length - 1].id + 1,
            value: "",
          };
        } else {
          var newInput = {
            id: 1,
            value: "",
          };
        }

        this.addressInputs.push(newInput);
      }
    },
    backToLogin() {
      this.showLoginForm = true;
      this.forgotPassword = false;
    },
    goToForgotPass() {
      this.showLoginForm = false;
      this.forgotPassword = true;
    },
    goToRegistration() {
      this.showLoginForm = false;
      this.forgotPassword = false;
    },
    removeInput(e) {
      this.addressInputs = this.addressInputs.filter((x) => {
        return x.id != e;
      });
    },
    checkRegistration() {
      // this.existsEmailAlert = false;

      // if (this.$v.reg.$invalid) {
      //   this.showAlerts = true;
      // } else {
      //   var users = this.$store.getters.getUsers;
      //   for (let i = 0; i < users.length; i++) {
      //     if (users[i].email == this.reg.email) {
      //       this.existsEmailAlert = true;
      //       return;
      //     }
      //   }
        this.showLoginForm = true;
        this.showForm = false;
      // }
    },
    sendNewPass() {},
  },
};
</script>