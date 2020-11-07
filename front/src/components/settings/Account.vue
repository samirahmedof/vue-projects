<template>
  <li class="account-list__item">
    <a href="#" @click="clickedItem">{{item.text}}</a>
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
  },
  methods: {
    clickedItem() {
      this.$emit("clicked-item", this.index);
    },
  },
};
</script>