<template>
  <tr>
    <td class="text-center">{{index+1}}</td>
    <td>{{item.number}}</td>
    <td>{{item.name}}</td>
    <td class="description">{{item.description}}</td>
    <td>{{item.category}}</td>
    <td>
      <div class="colorContainer d-flex justify-content-center">
        <div class="colorDiv" :style="{backgroundColor: item.color}"></div>
      </div>
    </td>
    <td>{{item.count}}</td>
    <td>{{item.price}}$</td>
    <td>{{item.amount}}$</td>
  </tr>
</template>
<script>
export default {
  props: ["item", "index"],
};
</script>