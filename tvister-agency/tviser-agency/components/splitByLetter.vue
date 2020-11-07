<template>
  <div class="letter-wrapper">
    <span class="letter" v-for="(l, i) in text.trim().split('')" :key="i">{{ l }} </span>
  </div>
</template>

<script>
  export default {
    name: 'splitByLetter',

    props: {
      text: String
    },

    watch: {
      text() {
        this.animate();
      }
    },

    mounted() {
      this.animate();
    },

    methods: {
      animate() {
        if (this.$el && this.$el.querySelectorAll) {
          const letters = this.$el.querySelectorAll('.letter-wrapper .letter');
          this.$anime({
            targets: letters,
            translateY: [100,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 800,
            delay: (el, i) => 300 + 100 * i
          });
        }
      }
    }
  }
</script>
<style lang="scss">
  .letter-wrapper{
    overflow: hidden;
    .letter{
      display: inline-block;
      transform: translateY(100%);
    }
  }
</style>
