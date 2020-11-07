<template>
  <footer>
    <div class="container-fluid">
      <div class="row align-items-center text-center justify-content-between">
        <div class="col-4" v-if="$store.getters.getIsLogged&&$store.getters.getUserStatus=='user'">
          <p>Buyers</p>
        </div>
        <div class="col-4">
          <div class="footerMenu">
            <ul>
              <li>
                <a href="#" title="Personal Data Processing Rules">Personal Data Processing Rules</a>
              </li>
              <li v-if="$store.getters.getIsLogged&&$store.getters.getUserStatus=='user'">
                <router-link to="/shipping-and-payment">Shipping and payment</router-link>
              </li>
              <li v-if="$store.getters.getIsLogged&&$store.getters.getUserStatus=='user'">
                <router-link to="/about">About</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <div class="phone">
            <span>+994 55 987 65 43</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>