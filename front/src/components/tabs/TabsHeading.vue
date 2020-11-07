<template>
  <li class="tabs-heading__item">
    <a href="#"
       :class="{'active': active }"
       @click.prevent="changeTab">{{name}}</a>
  </li>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    changeTab() {
      this.$emit("select");
    },
  },
};
</script>
