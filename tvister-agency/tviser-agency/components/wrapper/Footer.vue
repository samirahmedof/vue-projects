<template>
  <div class="footer">
    <div class="locales">
      <nuxt-link
        class="locales-lang cursor-activator" v-for="(l, i) in languagesToShow"
        :key="i" :class="{active: $i18n.locale == l}"
        :to="switchLocalePath(l)">{{ l }}
      </nuxt-link>
    </div>
    <Tabs v-if="type !== 'modal'" />
    <div class="navigator" v-if="type !== 'modal'" @click="$router.push(portfolioIsNext != undefined ? '/portfolio' : '/')">
      <img
        src="/icons/arrowEnabled.svg"
        class="navigator-arrow cursor-activator"
        style="transform: scaleX(-1);"
        v-if="portfolioIsNext"
      >
      <div class="cursor-activator" v-if="portfolioIsNext != undefined">Портфолио</div>
      <div class="cursor-activator" v-else>Главная</div>
      <img src="/icons/arrowEnabled.svg" class="navigator-arrow" v-if="portfolioIsNext == false">
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Footer',
  components: {
    Tabs: () => import("./Tabs")
  },

  props: {
    type: String,
  },

  computed: {
    ...mapState(['routes']),

    portfolioIsNext() {
      if (this.$route.name) {
        const curRouteIndex = this.routes.findIndex(v => v == this.$route.name.slice(0, this.$route.name.length - 5));
        if (curRouteIndex < 2) return false;
        if (curRouteIndex > 2) return true;
      }
    },
    languagesToShow() {
      // TODO
      let langs = ['en', 'ru', 'az', 'de'];

      // if (process.client)
      //   window.navigator.geolocation.getCurrentPosition(console.log, console.log)

      // if (this.$i18n.locale == 'en') {

      // }

      return langs;
    }
  }
}
</script>
