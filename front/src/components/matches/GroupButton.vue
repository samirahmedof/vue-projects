<template>
  <button
    type="button"
    class="btn filters__btn"
    @click.prevent="openFilterList"
    :class="{'active':activeBtn===index+1}"
  >{{btn.text}}</button>
</template>
<script>
export default {
  props: {
    btn: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    activeBtn: {
      type: Number,
      required: true,
    },
  },
  methods: {
    openFilterList() {
      this.$emit("clicked-btn", this.index + 1);
    },
  },
};
</script>