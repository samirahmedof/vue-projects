<template>
  <th>{{thead.text}}</th>
</template>
<script>
export default {
  props: ["thead"],
  computed: {
    showTh() {
      if (this.thead.obj != "edit") {
        return true;
      } else {
        if (this.$store.getters.getUserStatus == "manager") {
          return false;
        } else {
          return true;
        }
      }
    },
  },
};
</script>