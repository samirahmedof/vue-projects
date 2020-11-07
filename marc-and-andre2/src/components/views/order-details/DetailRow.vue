<template>
  <tr>
    <td class="text-center">{{index+1}}</td>
    <td @click="$router.push(`/catalog/${index+1}`)">{{item.number}}</td>
    <td>{{item.name}}</td>
    <td class="description">{{item.description}}</td>
    <td>
      <div class="colorContainer d-flex justify-content-center">
        <div class="colorDiv" :style="{backgroundColor: item.color}"></div>
      </div>
    </td>
    <td>{{item.category}}</td>
    <td>{{item.size}}</td>
    <Sizes v-for="(size,i) in sizes" :key="i" :size="size+index" />
    <td>{{item.count}}</td>
    <td>{{item.price}}$</td>
    <td>{{item.amount}}$</td>
  </tr>
</template>
<script>
import Sizes from "./Sizes";
export default {
  props: ["item", "index"],
  data() {
    return {
      sizes: [2, 6, 5, 8, 2, 5, 2, 0, 1],
    };
  },
  components: {
    Sizes,
  },
};
</script>