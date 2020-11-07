<template>
  <li class="tabs-heading__item">
    <a href="#" :class="{'active':activeIndex==index}" @click.prevent="changeTab">{{tab}}</a>
  </li>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    tab: {
      type: String,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changeTab() {
      this.$emit("tabChanged", this.index);
    },
  },
};
</script>