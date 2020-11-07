<template>
  <li class="filter-popup__item">
    <a href="#" :class="{'active':activeIndex===index}" @click.prevent="clickItem">{{item.text}}</a>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    clickItem() {
      this.$emit("change-active-item", this.index);
    },
  },
};
</script>