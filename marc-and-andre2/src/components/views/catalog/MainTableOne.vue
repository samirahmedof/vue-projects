<template>
  <tr>
    <td>{{this.index}}</td>
    <td>{{row.s36}}</td>
    <td>{{row.s38}}</td>
    <td>{{row.s40}}</td>
    <td>{{row.s42}}</td>
    <td>{{row.s44}}</td>
    <td>{{row.s46}}</td>
  </tr>
</template>
<script>
export default {
  props: ["index", "row", "letter"],
};
</script>