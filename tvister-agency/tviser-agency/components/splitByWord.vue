<template>
  <div class="word-wrapper">
    <span class="word" v-for="(l, i) in text.trim().split(' ')" :key="i">{{ l }} </span>
  </div>
</template>

<script>
  export default {
    name: 'splitByWord',

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
          const words = this.$el.querySelectorAll('.word-wrapper .word');
          this.$anime({
            targets: words,
            translateY: [100,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 900,
            delay: (el, i) => 500 + 100 * i
          });

          this.$el.style.visibility = 'visible';
        }
      }
    }
  }
</script>
<style lang="scss">
  .word-wrapper{
    visibility: hidden;
    .word{
      margin-right: 0.42vw;
      transform: translateY(100%);
      display: inline-block;
    }
  }
</style>
