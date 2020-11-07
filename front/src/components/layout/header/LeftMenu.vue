<template>
  <div class="left-menu" :class="{'open-menu':menuOpen}">
    <div class="left-menu__content">
      <a href="#" class="left-menu__menu-toggle" @click.prevent="menuToggle">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <transition
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <div class="left-menu__popup-container" v-show="menuOpen" v-click-outside="hide">
          <div class="left-menu__menu-close d-block d-md-none">
            <a href="#" @click.prevent="menuToggle">
              <img src="../../../assets/img/icons/times-white.svg" alt />
            </a>
          </div>
          <div class="left-menu__profile">
            <div class="setting">
              <div class="image-container">
                <img class="profile-photo" src="../../../assets/img/profilephoto.png" />
                <router-link to="/settings">
                  <img src="../../../assets/img/icons/setting.svg" />
                </router-link>
              </div>
            </div>
            <span class="user-name">Joseph Hemper</span>
            <span class="email-address">josephhemper@gmail.com</span>
          </div>
          <div class="left-menu__content">
            <ul>
              <li>
                <a href="#" v-b-modal.leaderboard-modal>
                  <div class="icon-cnt">
                    <img src="../../../assets/img/icons/leaderboard.svg" />
                  </div>
                  <span>Leaderboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="icon-cnt">
                    <img src="../../../assets/img/icons/ranks.svg" />
                  </div>
                  <span>Ranks</span>
                </a>
              </li>
              <li>
                <router-link to="/efficiency">
                  <div class="icon-cnt">
                    <img src="../../../assets/img/icons/eff.svg" />
                  </div>
                  <span>DBI Efficiency</span>
                </router-link>
              </li>
              <li>
                <router-link to="/settings">
                  <div class="icon-cnt">
                    <img src="../../../assets/img/icons/setting.svg" />
                  </div>
                  <span>Settings</span>
                </router-link>
              </li>
              <li>
                <router-link to="/support">
                  <div class="icon-cnt">
                    <img src="../../../assets/img/icons/support.svg" />
                  </div>
                  <span>Support</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <div class="icon-cnt">
                    <img src="../../../assets/img/icons/about.svg" />
                  </div>
                  <span>About</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="left-menu__logo">
            <img src="../../../assets/img/logo.png" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    menuToggle() {
      this.menuOpen = !this.menuOpen;
    },
    hide() {
      this.menuOpen = false;
    },
  },
  mounted() {
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
};
</script>
