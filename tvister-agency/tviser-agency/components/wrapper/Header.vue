<template>
  <div class="header-wrapper">
    <div class="header" v-if="type !== 'modal'">
      <div class="header-home" v-if="link">{{ $t(`routes.${link}`) }}</div>
      <img class="header-arrow" src="/icons/arrodDissabled.svg">
      <clink class="header-target cursor-activator" :to="nextLink" v-if="nextLink">
        {{ $t(`routes.${nextLink}`) }}
      </clink>
    </div>
    <img v-if="type !== 'modal'" src="/icons/hamburger.svg" alt="" class="hamburger cursor-activator" @click="openModal()">
    <!-- <div class="header-modal" v-if="type === 'modal'">Tviser Web development</div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  props: {
    type: String
  },

  data() {
    return {
      wait: false
    }
  },

  mounted() {
    this.$nuxt.$on('thank-you-next', () => {
      if (!this.wait) {
        this.wait = true;
        this.$router.push(this.localeRoute(this.nextLink));
        setTimeout(() => { this.wait = false }, 200);
      }
    });
  },

  methods: {
    openMenu() {
      this.$nuxt.$emit('open-menu');
    }
  },

  computed: {
    ...mapState(['routes']),

    link() {
      if (this.$route.name) {
        return this.$route.name.slice(0, this.$route.name.length - 5);
      }
    },

    nextLink() {
      if (this.$route.name) {
        const curRouteIndex = this.routes.findIndex(v => v == this.$route.name.slice(0, this.$route.name.length - 5));
        return curRouteIndex + 1 > this.routes.length - 1 ? this.routes[0] : this.routes[curRouteIndex + 1];
      }
    }
  }
}

</script>
