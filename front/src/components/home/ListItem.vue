<template>
  <li>
    <b-row>
      <b-col cols="1">
        <div class="top-users__no">{{index+1}}.</div>
      </b-col>

      <b-col cols="6">
        <div class="top-users__about">
          <img :src="item.img" />
          <span>{{item.name}}</span>
        </div>
      </b-col>

      <b-col cols="2">
        <div class="top-users__amount">
          <span>$ {{item.amount}}</span>
        </div>
      </b-col>

      <b-col cols="2" class="p-0">
        <div class="top-users__roi" v-if="item.roi">
          R.O.I
          <span>+{{item.roi}}%</span>
        </div>
      </b-col>
    </b-row>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>