<template>
  <div class="tabs">
    <clink
      v-for="(route, i) in routes"
      :key="i"
      class="block"
      :to="{path: `/${route == 'index' ? '' : route }`}"
    >
      <div :class="{big: active == i, medium: active == i - 1 || active == i + 1, small: active < i -1 || active > i + 1}"></div>
    </clink>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Tabs',

  computed: {
    ...mapState(['routes']),

    active() {
      return this.routes.findIndex(v => this.$route && this.$route.name ? v == this.$route.name.slice(0, this.$route.name.length - 5) : -1)
    }
  }
}
</script>
