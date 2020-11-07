<template>
  <div class="inbox__container">
    <div class="inbox__day">
      <h2>{{item.day}}</h2>
    </div>
    <div class="inbox-card">
      <ul>
        <InboxList v-for="listitem in item.notifications" :key="listitem.id" :listitem='listitem'/>
      </ul>
    </div>
  </div>
</template>
<script>
import InboxList from "./InboxList";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    InboxList,
  },
};
</script>