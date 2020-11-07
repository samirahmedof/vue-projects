<template>
  <li class="games-list-item">
    <b-row>
      <b-col cols="2">
        <div class="games-list-item__amount">
          <span
            :class="[{'games-list-item__amount--red':listitem.amount<0},{'games-list-item__amount--green':listitem.amount>0}]"
          >{{getAmount(listitem.amount)}}</span>
        </div>
      </b-col>
      <b-col cols="6">
        <div class="games-list-item__teams">
          <span>{{listitem.team1}}</span>
          vs
          <span>{{listitem.team2}}</span>
        </div>
      </b-col>
      <b-col cols="2">
        <div class="games-list-item__time">
          <span>{{listitem.time}}</span>
        </div>
      </b-col>
      <b-col cols="2">
        <div class="games-list-item__palace">
          <span>{{listitem.palace}}</span>
        </div>
      </b-col>
    </b-row>
  </li>
</template>
<script>
export default {
  props: {
    listitem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getAmount(e) {
      if (e < 0) {
        return "-$" + Math.abs(e);
      } else {
        return "$" + e;
      }
    },
  },
};
</script>