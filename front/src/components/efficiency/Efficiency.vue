<template>
  <tr>
    <td class="efficiency-page__odds">{{item.odds}}</td>
    <td class="efficiency-page__won">{{item.won}}</td>
    <td class="efficiency-page__total">{{item.total}}</td>
    <td class="efficiency-page__actual">{{item.actual}}</td>
    <td class="efficiency-page__theoretical">{{item.theoretical}}</td>
    <td class="efficiency-page__value">{{item.value}}</td>
  </tr>
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