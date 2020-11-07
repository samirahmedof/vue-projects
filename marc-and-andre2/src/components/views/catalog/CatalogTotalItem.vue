<template>
  <td v-if="item>0">{{item}}</td>
  <td v-else></td>
</template>
<script>
export default {
  props: ["item"],
};
</script>