<template>
  <div class="table__matches">
    <b-card no-body class="bg-transparent border-0">
      <b-tabs align="center">
        <b-tab title="My Bets">
          <TableBets @show-calendar="showCalendar" />
        </b-tab>
        <b-tab title="My Efficiency">
          <TableEfficiency />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import TableBets from "./TableBets";
import TableEfficiency from "./TableEfficiency";
export default {
  name: "TableMatches",
  components: { TableEfficiency, TableBets },
  methods: {
    showCalendar() {
      this.$emit("show-calendar");
    },
  },
};
</script>
