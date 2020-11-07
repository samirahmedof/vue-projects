<template>
  <header>
    <div class="mainHeader">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-2">
            <div class="logo">
              <router-link to="/orders">
                <img src="src/assets/img/logo.png" alt="logo" />
              </router-link>
            </div>
          </div>
          <transition
            enter-active-class="animate__animated animate__fadeInDown animate__faster"
            leave-active-class="animate__animated animate__fadeOutUp animate__faster"
          >
            <div class="offset-1 col-4">
              <div class="searching" v-if="!$store.getters.getHideSearch">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                      <button class="btn btn-input">Search</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <transition
            enter-active-class="animate__animated animate__fadeInDown animate__faster"
            leave-active-class="animate__animated animate__fadeOutUp animate__faster"
          >
            <div class="offset-1 col-4" v-if="$store.getters.getIsLogged">
              <div class="row">
                <div class="col-6">
                  <div class="cart text-center" v-if="$store.getters.getUserStatus=='user'&&!isOrderPage">
                    <div class="icon">
                      <router-link to="/order-details">
                        <i class="fas fa-shopping-cart"></i>
                      </router-link>
                    </div>
                    <p>Sum 13$</p>
                    <p>Total 20</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="user">
                    <div class="profile">
                      <img src="src/assets/img/empty.png" alt="user" />
                      <div class="userPopup">
                        <ul>
                          <li>
                            <router-link to="/profile">Profile</router-link>
                          </li>
                          <li>
                            <a href="#" title="exit" @click.prevent="getLogout">Exit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeInDown animate__faster"
      leave-active-class="animate__animated animate__fadeOutUp animate__faster"
    >
      <div
        class="secHeader"
        v-if="$store.getters.getIsLogged&&$store.getters.getUserStatus!='user'"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <ul>
                <li>
                  <router-link to="/users" exact>User List</router-link>
                </li>
                <li>
                  <router-link to="/quick-registration">Quick Registration</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
<script>
export default {
  methods: {
    getLogout() {
      this.$store.commit("getLogout");
      this.$router.push("/login");
    },
  },
  computed: {
    isOrderPage() {
      return this.$route.path == "/orders";
    },
  },
};
</script>