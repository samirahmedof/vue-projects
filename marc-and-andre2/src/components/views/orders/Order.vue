<template>
  <tr v-if="item.status=='sent'">
    <td>{{index+1}}</td>
    <td>{{item.date}}</td>
    <td>{{item.status}}</td>
  </tr>
  <tr class="inProgress" v-else @click="$router.push('/order-details')">
    <td>{{index+1}}</td>
    <td>{{item.date}}</td>
    <td>{{item.status}}</td>
  </tr>
</template>
<script>
export default {
  props: ["item", "index"],
};
</script>