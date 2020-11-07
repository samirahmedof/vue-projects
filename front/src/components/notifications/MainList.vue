<template>
  <div class="games">
    <div class="games__day">
      <h2>{{item.day}}</h2>
    </div>
    <div class="games__list">
      <ul>
        <List v-for="listitem in item.list"
              :key="listitem.id"
              :listitem="listitem" />
      </ul>
    </div>
  </div>
</template>
<script>
import List from "./List";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    List,
  },
};
</script>
