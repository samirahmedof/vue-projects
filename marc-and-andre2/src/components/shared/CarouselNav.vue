<template>
  <div class="col-12" ref="col">
    <div class="imgContainer" :class="{'active': activeIndex==index}" @click="clickedImage">
      <img :src="item.src" v-if="item.type=='img'" />
      <video v-else :src="item.src"></video>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "index", "activeIndex"],
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    clickedImage() {
      this.$emit("clickedImageIndex", this.index);
    },
  },
};
</script>
