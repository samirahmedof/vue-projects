<template>
  <div class="matches-list__container">
    <table class="table">
      <thead>
        <tr>
          <th colspan="3">
            <img :src="league.icon" />
            {{league.name}}
          </th>
          <th>Home</th>
          <th>Draw</th>
          <th>Away</th>
        </tr>
      </thead>
      <tbody>
        <Match
          v-for="(match,index) in league.matches"
          :key="match.id"
          :match="match"
          :index="index"
          :showable="showableRowsCount"
        />
      </tbody>
    </table>
    <div class="matches-list__show-more text-center" v-if="league.matches.length>4">
      <a href="#" @click.prevent="changeShowableRows" :class="{'show-all':showableRowsCount!=4}">
        <img src="../../assets/img/icons/arrow-down.svg" />
      </a>
    </div>
  </div>
</template>
<script>
import Match from "./Match";
export default {
  props: {
    league: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showableRowsCount: 4,
    };
  },
  components: {
    Match,
  },
  methods: {
    changeShowableRows() {
      if (this.showableRowsCount === 4) {
        this.showableRowsCount = this.league.matches.length;
      } else {
        this.showableRowsCount = 4;
      }
    },
  },
};
</script>