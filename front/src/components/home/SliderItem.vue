<template>
  <div class="home-slider__item">
    <div class="home-slider__container">
      <img :src="item.img" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>