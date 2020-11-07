<template>
  <div class="modal" :class="isMenuOpen ? '': 'hide'">
    <div class="Modal-body">
      <img src="/icons/close.svg" alt="" class="close" @click="closeModal()">
    </div>
    <Menu />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Modal',
  
  components: {
    Menu: () => import('~/components/global/Menu')
  },

  watch: {
    routerName() {
      this.closeModal();
    }
  },

  mounted() {
    this.$nuxt.$on('open-modal', () => {
      this.setMenuOpen(true);
    })
  },

  computed: {
    routerName() {
      return this.$route.name
    },

    ...mapState({
      isMenuOpen: state => state.isMenuOpen
    })
  },

  methods: {
    ...mapMutations(['setMenuOpen']),

    closeModal() {
      setTimeout(() => {
        this.setMenuOpen(false);
      }, 600);
      this.$nuxt.$emit('close-modal');
    }
  }
}

</script>
